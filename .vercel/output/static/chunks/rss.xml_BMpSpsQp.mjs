import { _ as __vite_glob_0_0 } from './post-1_D_28A6AA.mjs';
import { _ as __vite_glob_0_1 } from './post-2_DokqN3Nj.mjs';
import { _ as __vite_glob_0_2 } from './post-3_BXKHjvJ1.mjs';
import { _ as __vite_glob_0_3 } from './post-4_C9RR-lEF.mjs';
import { _ as __vite_glob_0_4 } from './post-5_Dj-7mu4E.mjs';
import { _ as __vite_glob_0_5 } from './post-6_B178puzM.mjs';
import rss from '@astrojs/rss';
import { f as formatBlogPosts } from './MainLayout_Dt99Eh7a.mjs';

const postImportResult = /* #__PURE__ */ Object.assign({"./blog/post-1.md": __vite_glob_0_0,"./blog/post-2.md": __vite_glob_0_1,"./blog/post-3.md": __vite_glob_0_2,"./blog/post-4.md": __vite_glob_0_3,"./blog/post-5.md": __vite_glob_0_4,"./blog/post-6.md": __vite_glob_0_5});
const posts = formatBlogPosts(Object.values(postImportResult));
const get = () => rss({
  stylesheet: "/rss/styles.xsl",
  title: "My Blog",
  description: "Just a blog for QA testing purposes.",
  site: "https://astro-blog-cip.netlify.app",
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

export { get };
