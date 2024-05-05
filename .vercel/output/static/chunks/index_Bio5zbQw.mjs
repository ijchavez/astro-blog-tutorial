import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$PostCard } from './PostCard_DJxlU4xx.mjs';
import { f as formatBlogPosts, $ as $$Link, a as $$MainLayout } from './MainLayout_Dt99Eh7a.mjs';

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/post-1.md": () => import('./post-1_D_28A6AA.mjs').then(n => n._),"./blog/post-2.md": () => import('./post-2_DokqN3Nj.mjs').then(n => n._),"./blog/post-3.md": () => import('./post-3_BXKHjvJ1.mjs').then(n => n._),"./blog/post-4.md": () => import('./post-4_C9RR-lEF.mjs').then(n => n._),"./blog/post-5.md": () => import('./post-5_Dj-7mu4E.mjs').then(n => n._),"./blog/post-6.md": () => import('./post-6_B178puzM.mjs').then(n => n._)}), () => "./blog/*.md");
  const formattedPosts = formatBlogPosts(allPosts, {
    limit: 3
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Automaton Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container about" aria-label="About Me"> <img src="/images/headshot.jpg" alt="My headshot" width="200" height="330"> <div class="content"> <h1 class="h1">My Blog</h1> <p>
15+ year of experience as a Software Quality Analyst and +5 as QA Automation Engineer.
</p> ${renderComponent($$result2, "Link", $$Link, { "href": "/about/", "style": "secondary", "text": "Hi there!!\u{1F44B}" })} </div> </section> <section class="container" aria-label="New Blog Posts"> <h2 class="h1">New Blog Posts</h2> <div class="post-container"> ${formattedPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post.frontmatter, "url": post.url, "tagType": "h3" })}`)} </div> </section> ` })}`;
}, "D:/Astro/astro-blog-tutorial/src/pages/index.astro", void 0);

const $$file = "D:/Astro/astro-blog-tutorial/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
