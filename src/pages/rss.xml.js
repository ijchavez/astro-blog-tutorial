import rss from '@astrojs/rss';

import { formatBlogPosts } from "../js/utils"

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

export const get = () => rss({
  stylesheet: '/rss/styles.xsl',
  title: 'My Blog',
  description: 'Just a blog for QA testing purposes.',
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.description,
    customData: `
      <author>${post.frontmatter.author}</author>
    `
  }))
});