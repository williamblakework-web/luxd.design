import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge conditional classes without Tailwind conflicts winning by accident. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const ASPECT_CLASS: Record<string, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  '9/16': 'aspect-[9/16]',
  auto: '',
}

/**
 * Aspect ratio comes from the schema rather than from the asset, so a media
 * container holds its space even when the asset is missing or still loading.
 */
export function aspectClass(aspect: string | undefined): string {
  return ASPECT_CLASS[aspect ?? '16/9'] ?? 'aspect-video'
}

/** Marks strings the content owner still has to fill in. */
export function isPlaceholder(value: string | undefined | null): boolean {
  return typeof value === 'string' && value.trim().startsWith('[ADD')
}
