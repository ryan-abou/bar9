import rss from '@astrojs/rss';
import { getIssues } from '../lib/issues';
import { SITE } from '../site';

export async function GET(context) {
  const issues = await getIssues();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: issues
      .slice()
      .reverse()
      .map((issue) => ({
        title: `No. ${issue.data.bar}: ${issue.data.title}`,
        description: issue.data.dek,
        pubDate: issue.data.date,
        link: `${base}/issues/${issue.id}/`,
      })),
  });
}
