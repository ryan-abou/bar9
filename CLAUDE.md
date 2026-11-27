# Bar 9

A monthly piano blog by Ryan Abourjeili, connected to PianoGlass (the Quest 3
piano trainer in `../PianoGlass`). The name comes from the app's results card,
which points at the bar that needs work ("Bar 9 needs work"). The name may
change: it lives only in `src/site.ts` (plus `BASE` in `astro.config.mjs`,
which must match the GitHub repo name).

## What every issue is

Issues are numbered plainly: No. 1, No. 2... ("Bar 9" is only the name; don't
make readers decode a "bar = issue" metaphor).

The home page follows what clear personal blogs do (Robin Sloan, Gwern, Julia
Evans, Frank Chimero): one sentence saying who Ryan is and what the site is,
the newest issue, then a plain list of every issue (number, title, date), then
"Why it's called Bar 9". The newest issue's number gets the pencil circle.

Sample issues (`sample: true`) are for previewing the layout. They show in
`npm run dev` only and must be deleted before launch:
`src/content/issues/sample-*.md`.

1. **The story** (about 1,000 to 1,500 words). One piece of piano history or
   practice, told properly, with sources. Each story connects to a PianoGlass
   feature, and its last section makes that link.
2. **This month in PianoGlass** (about 150 to 300 words). What changed in the
   app that month, one clip filmed through the headset, and what's next.

## Schedule

- A new issue on the **first Sunday of each month**. Bar 1 is December 6, 2026.
- Around the 20th of the month before: pick the story from `src/data/plan.ts`
  (ideas in `topics.md`) and start its file in `src/content/issues/`.
- In the last week: write the PianoGlass part from the month's commits
  (`git -C ../PianoGlass log --since=<1st of month> --no-merges`),
  `../PianoGlass/docs/history.md` and `../Milestones`.

## Where it lives

- Live: https://ryan-abou.github.io/bar9/ (repo `ryan-abou/bar9`, deployed by
  GitHub Actions on every push to `main`).
- Ryan's portfolio (https://ryan-abou.github.io/, repo `ryan-abou/ryan-abou.github.io`)
  has a "Bar 9" section that reads `/bar9/rss.xml` in the browser and lists the
  three newest issues. It expects RSS titles shaped `No. <n>: <title>`, so keep
  that format in `src/pages/rss.xml.js`.

## The site

Astro 6 (pinned: Astro 7 needs a newer Node than this PC has), static, hosted on
GitHub Pages by `.github/workflows/deploy.yml`.

- `npm run dev`: preview at http://localhost:4321/bar9/ (shows drafts).
- `npm run build`: the real site in `dist/` (drafts left out).
- `src/content/issues/<slug>.md`: one file per issue. The front matter holds
  the title, date, dek, `status` (draft or published), the PianoGlass part
  (`pianoglass:`), the image and the sources. The body is the story.
  - `## Heading` sections get their bar-style numbers automatically.
  - Pencil notes in the margin: put `<aside class="note">text</aside>` on its
    own line, followed by a blank line, right before the paragraph it belongs to.
    Keep them short (a few words per line).
  - A pull quote: a blockquote whose last paragraph is the attribution.
- `src/data/plan.ts`: the topic plan. The home page and the end of each issue
  show the next unwritten one ("Next, in May 2027: ...").
- `src/components/PianoGlassPanel.astro`: the PianoGlass part, in the app's
  colors. This is the only place the app's look appears.
- Images go in `public/images/` and must be public domain or ours. Record the
  credit in the front matter.
- Clips go on YouTube; put the video ID in `pianoglass.youtube`. Never commit
  video files.

## Voice

Write like Ryan talks, not like a template.

- First person, contractions, plain words. Mix short sentences with longer ones.
- Start with the actual point. No warm-up intro, no tidy summary at the end:
  stop when the thought is finished.
- Never: delve, tapestry, testament, dynamic, elevate, unleash, realm,
  game-changer, "in today's fast-paced world", "let's dive in".
- No forced symmetry: don't squeeze sections into matching three-bullet lists
  or "Bold word: explanation" templates. The PianoGlass part is paragraphs,
  not a list.
- Microcopy sounds like a person ("there's an RSS feed if you use a reader"),
  never like a company ("Subscribe for the latest updates"). Don't promise an
  email list that doesn't exist.
- No meta lines about the design ("this part uses the app's colors").
- No hype. Explain, don't sell.
- Every historical claim must be in a listed source. If a fact can't be
  checked, cut it or say it's uncertain ("around 1700").
- Feature claims must be true of the app today. Check the code or
  `../PianoGlass/docs/controls.md` first.
- US spelling (color, practice). When both hands are named, Left hand comes
  before Right hand.

## Look

Direction A, "marked score": warm manuscript paper (`#f6f3ec`) and charcoal
ink (`#24211d`), never pure white or black. Libre Caslon Display for headings,
Literata for reading text, red pencil notes in the left margin, and the issue
list drawn as bars on a staff. Reading comfort comes first: about 70 characters
a line and a line height around 1.7. Useful small details stay: dates, reading
time, margin notes, quiet underline hovers.
Design canvas (the site has moved past it; the site is the source of truth):
https://claude.ai/artifact/RCwCBPp6utmdUNq5ankkfG

It must not look AI-made, with the same rules as Ryan's portfolio audit: no
uppercase monospace eyebrow labels, no decorative glass, glow or gradients, no
single colored words in headlines, no card grids of label + heading + grey blurb,
no tag pills, no stock fade-in on everything, no clever filler copy. The pencil
and the staff carry the look; everything else stays plain.

Red pencil (`--pencil`) is only for hand-made marks: the logo circle, margin
notes, the circled bar 9 on the staff, the newest issue's number, and the
current section in the contents list. Never use it for buttons or links.

The page is framed like a sheet of music: a full-width staff under the header
(measure 9 circled) and the same staff ending in a final double barline above
the footer. Wide screens use the margins on purpose: issue pages have pencil
notes on the left and a sticky "In this issue" list on the right; the home page
puts the newest issue beside the full list. The text column itself stays about
680px so lines stay readable.

The PianoGlass part is a dark card clipped onto the paper with a paperclip
(slight tilt, soft shadow). It's the only thing on the site that sits "above"
the page.

## Research and privacy

`../Docs` has IRB forms. Don't write about the research study, its participants
or its results until Ryan says it's allowed.
