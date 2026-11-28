// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves a project site at https://<user>.github.io/<repo>/.
// BASE must match the repo name. Change both here if the blog's name or URL changes.
const SITE = 'https://ryan-abou.github.io';
const BASE = '/bar9';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  // No floating Astro toolbar over the page in `npm run dev`.
  devToolbar: { enabled: false },
});
