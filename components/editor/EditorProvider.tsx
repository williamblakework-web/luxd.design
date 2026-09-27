'use client'

import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react'
import type { Block, EditorAction, EditorState, PortfolioDocument, Project } from '@/lib/schema'

const HISTORY_LIMIT = 50

/* ---------------------------------------------------------------------------
   Pure helpers. Each returns a new document, never mutating the old one, so
   the undo stack holds genuinely distinct snapshots.
   --------------------------------------------------------------------------- */

function mapProject(
  document: PortfolioDocument,
  slug: string,
  transform: (project: Project) => Project,
): PortfolioDocument {
  return {
    ...document,
    projects: document.projects.map((project) => (project.slug === slug ? transform(project) : project)),
  }
}

function mapBlocks(project: Project, transform: (blocks: Block[]) => Block[]): Project {
  return { ...project, blocks: transform(project.blocks) }
}

function withHistory(state: EditorState, nextDocument: PortfolioDocument): EditorState {
  return {
    ...state,
    document: { ...nextDocument, updatedAt: new Date().toISOString() },
    past: [...state.past, state.document].slice(-HISTORY_LIMIT),
    future: [],
    dirty: true,
  }
}

/* ---------------------------------------------------------------------------
   Reducer
   --------------------------------------------------------------------------- */

function reducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case 'setMode':
      return { ...state, mode: action.mode, selectedBlockId: action.mode === 'view' ? null : state.selectedBlockId }

    case 'selectBlock':
      return { ...state, selectedBlockId: action.blockId }

    case 'setActiveProject':
      return { ...state, activeProjectSlug: action.slug }

    case 'updateBlock': {
      const next = mapProject(state.document, action.projectSlug, (project) =>
        mapBlocks(project, (blocks) =>
          blocks.map((block) =>
            block.id === action.blockId ? ({ ...block, ...action.patch } as Block) : block,
          ),
        ),
      )
      return withHistory(state, next)
    }

    case 'moveBlock': {
      const next = mapProject(state.document, action.projectSlug, (project) =>
        mapBlocks(project, (blocks) => {
          const index = blocks.findIndex((block) => block.id === action.blockId)
          const target = action.direction === 'up' ? index - 1 : index + 1
          if (index === -1 || target < 0 || target >= blocks.length) return blocks
          const copy = [...blocks]
          const [moved] = copy.splice(index, 1)
          copy.splice(target, 0, moved)
          return copy
        }),
      )
      return withHistory(state, next)
    }

    case 'removeBlock': {
      const next = mapProject(state.document, action.projectSlug, (project) =>
        mapBlocks(project, (blocks) => blocks.filter((block) => block.id !== action.blockId)),
      )
      return { ...withHistory(state, next), selectedBlockId: null }
    }

    case 'insertBlock': {
      const next = mapProject(state.document, action.projectSlug, (project) =>
        mapBlocks(project, (blocks) => {
          if (!action.afterBlockId) return [...blocks, action.block]
          const index = blocks.findIndex((block) => block.id === action.afterBlockId)
          if (index === -1) return [...blocks, action.block]
          const copy = [...blocks]
          copy.splice(index + 1, 0, action.block)
          return copy
        }),
      )
      return { ...withHistory(state, next), selectedBlockId: action.block.id }
    }

    case 'updateProject': {
      const next = mapProject(state.document, action.projectSlug, (project) => ({ ...project, ...action.patch }))
      return withHistory(state, next)
    }

    case 'updateMeta':
      return withHistory(state, { ...state.document, meta: { ...state.document.meta, ...action.patch } })

    case 'replaceDocument':
      return {
        ...state,
        document: action.document,
        past: [...state.past, state.document].slice(-HISTORY_LIMIT),
        future: [],
        dirty: true,
        selectedBlockId: null,
      }

    case 'undo': {
      if (state.past.length === 0) return state
      const previous = state.past[state.past.length - 1]
      return {
        ...state,
        document: previous,
        past: state.past.slice(0, -1),
        future: [state.document, ...state.future].slice(0, HISTORY_LIMIT),
        dirty: true,
      }
    }

    case 'redo': {
      if (state.future.length === 0) return state
      const [next, ...rest] = state.future
      return {
        ...state,
        document: next,
        past: [...state.past, state.document].slice(-HISTORY_LIMIT),
        future: rest,
        dirty: true,
      }
    }

    case 'markClean':
      return { ...state, dirty: false }

    default:
      return state
  }
}

/* ---------------------------------------------------------------------------
   Context
   --------------------------------------------------------------------------- */

interface EditorContextValue {
  state: EditorState
  dispatch: React.Dispatch<EditorAction>
  isEditing: boolean
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function EditorProvider({
  initialDocument,
  children,
}: {
  initialDocument: PortfolioDocument
  children: ReactNode
}) {
  const [state, dispatch] = useReducer(reducer, {
    mode: 'view',
    selectedBlockId: null,
    activeProjectSlug: null,
    document: initialDocument,
    dirty: false,
    past: [],
    future: [],
  } satisfies EditorState)

  const value = useMemo<EditorContextValue>(
    () => ({ state, dispatch, isEditing: state.mode === 'edit' }),
    [state],
  )

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}

export function useEditor(): EditorContextValue {
  const context = useContext(EditorContext)
  if (!context) throw new Error('useEditor must be used inside an EditorProvider')
  return context
}

/** Live project, so edits made in the bridge appear on the page immediately. */
export function useProject(slug: string): Project | undefined {
  const { state } = useEditor()
  return state.document.projects.find((project) => project.slug === slug)
}

export function useDocument(): PortfolioDocument {
  return useEditor().state.document
}
