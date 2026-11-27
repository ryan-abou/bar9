import { getCollection, type CollectionEntry } from 'astro:content';

export type Issue = CollectionEntry<'issues'>;

/** Issues to show: everything in dev, only published non-sample ones in a build. */
export async function getIssues(): Promise<Issue[]> {
  const all = await getCollection('issues', ({ data }) =>
    import.meta.env.DEV ? true : data.status === 'published' && !data.sample,
  );
  return all.sort((a, b) => a.data.bar - b.data.bar);
}

/** The story's first paragraph as plain text, for the home page. */
export function opening(issue: Issue): string {
  const blocks = (issue.body ?? '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<aside[\s\S]*?<\/aside>/g, '')
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter((b) => b && !b.startsWith('#') && !b.startsWith('>') && !b.startsWith('<'));
  return (blocks[0] ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

/** Minutes to read the story and the PianoGlass part, at about 230 words a minute. */
export function readingTime(issue: Issue): string {
  const story = (issue.body ?? '')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  const extra = issue.data.pianoglass.body.join(' ');
  const words = (story + ' ' + extra).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 230));
  return `${minutes} min read`;
}
