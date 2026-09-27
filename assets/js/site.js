/* William Blake / London UX Design
   Site behaviour. No dependencies, no build step.
   1. Theme preference (system by default, manual override remembered)
   2. Current page marking in the nav
   3. Scroll reveal, disabled under reduced motion
   4. Footer year
*/

(function () {
  'use strict';

  /* ---------------------------------------------------------------
     1. Theme
     The page respects the system setting until someone chooses.
     A choice is stored and wins from then on.
     --------------------------------------------------------------- */

  var STORAGE_KEY = 'luxd-theme';
  var root = document.documentElement;

  function storedTheme() {
    try { return window.localStorage.getItem(STORAGE_KEY); }
    catch (err) { return null; }
  }

  function storeTheme(value) {
    try { window.localStorage.setItem(STORAGE_KEY, value); }
    catch (err) { /* private mode, blocked storage: carry on */ }
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit) { return explicit; }
    return systemPrefersDark() ? 'dark' : 'light';
  }

  var saved = storedTheme();
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  }

  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      storeTheme(next);
      toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  /* ---------------------------------------------------------------
     2. Mark the current page in the navigation
     --------------------------------------------------------------- */

  function normalise(path) {
    return path.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  }

  var here = normalise(window.location.pathname);
  var inWorkSection = /\/work\//.test(window.location.pathname);
  var navLinks = document.querySelectorAll('.nav-links a');

  Array.prototype.forEach.call(navLinks, function (link) {
    var href = link.getAttribute('href') || '';

    // Anchor and mail links never represent a page.
    if (href.charAt(0) === '#' || href.indexOf('#') > -1 || href.indexOf('mailto:') === 0) { return; }

    var target = normalise(link.pathname);

    // Exact page match.
    if (target === here) {
      link.setAttribute('aria-current', 'page');
      return;
    }

    // A case study under /work/ belongs to the Work section.
    if (inWorkSection && /work$|work\.html$/.test(target)) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ---------------------------------------------------------------
     3. Scroll reveal
     --------------------------------------------------------------- */

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealables = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    Array.prototype.forEach.call(revealables, function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------------
     4. Footer year
     --------------------------------------------------------------- */

  var yearSlots = document.querySelectorAll('[data-year]');
  var year = String(new Date().getFullYear());
  Array.prototype.forEach.call(yearSlots, function (el) { el.textContent = year; });
})();
