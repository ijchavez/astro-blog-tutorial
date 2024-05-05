import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$Link, f as formatBlogPosts, a as $$MainLayout } from './MainLayout_Dt99Eh7a.mjs';
import { $ as $$PostCard } from './PostCard_DJxlU4xx.mjs';
import { $ as $$CategoryCloud } from './CategoryCloud_Cdn3C6ws.mjs';

const $$Astro$1 = createAstro("https://astro-blog-cip.netlify.app");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, currentPage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Blog pages"> ${prevUrl && renderTemplate`${renderComponent($$result, "Link", $$Link, { "text": "", "href": prevUrl, "style": "primary", "borderVisible": true, "isFilled": false, "icon": {
    name: "ri:arrow-left-fill",
    side: "left"
  } })}`} ${currentPage > 1 && renderTemplate`<span class="current-page">${currentPage}</span>`} ${nextUrl && renderTemplate`${renderComponent($$result, "Link", $$Link, { "text": "", "href": nextUrl, "style": "primary", "borderVisible": true, "isFilled": false, "icon": {
    name: "ri:arrow-right-fill",
    side: "right"
  } })}`} </nav>`;
}, "D:/Astro/astro-blog-tutorial/src/components/Pagination.astro", void 0);

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
const Astro = $$Astro;
async function getStaticPaths({ paginate }) {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"./post-1.md": () => import('./post-1_D_28A6AA.mjs').then(n => n._),"./post-2.md": () => import('./post-2_DokqN3Nj.mjs').then(n => n._),"./post-3.md": () => import('./post-3_BXKHjvJ1.mjs').then(n => n._),"./post-4.md": () => import('./post-4_C9RR-lEF.mjs').then(n => n._),"./post-5.md": () => import('./post-5_Dj-7mu4E.mjs').then(n => n._),"./post-6.md": () => import('./post-6_B178puzM.mjs').then(n => n._)}), () => "./*.md");
  const formattedPosts = formatBlogPosts(allPosts);
  return paginate(formattedPosts, {
    pageSize: 3
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "My Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container" aria-label="New Blog Posts"> <h1 class="h1">New Blog Posts</h1> <div class="post-container"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post.frontmatter, "url": post.url, "tagType": "h2" })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next, "currentPage": page.currentPage })} <aside class="container" aria-label="Blog Categories"> <h2 class="h3">Blog Categories</h2> ${renderComponent($$result2, "CategoryCloud", $$CategoryCloud, { "showCount": true })} </aside> </section> ` })}`;
}, "D:/Astro/astro-blog-tutorial/src/pages/blog/[...page].astro", void 0);

const $$file = "D:/Astro/astro-blog-tutorial/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
