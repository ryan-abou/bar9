// Everything that names the blog lives here, so renaming it is one edit.
export const SITE = {
  name: 'Bar 9',
  // The part of the name the logo circles in red pencil.
  circled: '9',
  author: 'Ryan Abourjeili',
  description:
    'I write about the piano once a month, and about PianoGlass, the piano trainer I’m building for the Meta Quest 3.',
  schedule: 'comes out on the 9th of each month',
  // Kit form "Bar 9 signup". Kit sends a confirmation email, then redirects to /welcome/.
  newsletter: {
    action: 'https://app.kit.com/forms/10249989/subscriptions',
  },
  links: {
    portfolio: 'https://ryan-abou.github.io/',
    // The portfolio's first screen plays PianoGlass's falling notes with sound and clickable keys.
    // ?from=bar9 makes its "Play your own" button pulse (portfolio version 20 and later).
    demo: 'https://ryan-abou.github.io/?from=bar9',
    pianoglass: 'https://github.com/ryan-abou/pianoglass',
  },
};

/** Prefix a site path with the base path (needed on GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

export function formatShortDate(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
