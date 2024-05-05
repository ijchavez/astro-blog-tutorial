import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, e as renderSlot } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$Image } from './index_FvwMRqbz.mjs';
import { s as slugify, b as formatDate, f as formatBlogPosts, a as $$MainLayout } from './MainLayout_Dt99Eh7a.mjs';
import { $ as $$CategoryCloud } from './CategoryCloud_Cdn3C6ws.mjs';

const $$Astro$2 = createAstro("https://astro-blog-cip.netlify.app");
const $$PostHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostHeader;
  const { category, title, author, date, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header> <div class="container"> <small> <a${addAttribute(`/category/${slugify(category)}/`, "href")} class="badge">${category}</a> </small> <h1 class="h2">${title}</h1> <p>
by <a${addAttribute(`/author/${slugify(author)}/`, "href")}>${author}</a> • ${formatDate(date)} </p> </div> ${renderComponent($$result, "Image", $$Image, { "src": image.src, "alt": image.alt, "width": "1200", "height": "600", "format": "avif", "fit": "cover", "quality": 80, "aspectRatio": "5:2", "class": "hero-image" })} </header>`;
}, "D:/Astro/astro-blog-tutorial/src/components/PostHeader.astro", void 0);

const $$Astro$1 = createAstro("https://astro-blog-cip.netlify.app");
const $$RelatedPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { relatedPosts } = Astro2.props;
  return renderTemplate`${relatedPosts.map((post) => renderTemplate`${maybeRenderHead()}<div class="related-post"><h3 class="h4"><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></h3>${renderComponent($$result, "Image", $$Image, { "src": post.frontmatter.image.src, "alt": post.frontmatter.image.alt, "width": "200", "height": "100", "format": "avif", "fit": "cover", "quality": 80, "aspectRatio": "5:2", "class": "hero-image" })}<small><a${addAttribute(`/author/${slugify(post.frontmatter.author)}/`, "href")}>${post.frontmatter.author}</a>${" "}
• ${formatDate(post.frontmatter.date)}</small></div>`)}`;
}, "D:/Astro/astro-blog-tutorial/src/components/RelatedPosts.astro", void 0);

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
const $$BlogPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter } = Astro2.props;
  const { title, description, date, category, author, image } = frontmatter;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/blog/post-1.md": () => import('./post-1_D_28A6AA.mjs').then(n => n._),"../pages/blog/post-2.md": () => import('./post-2_DokqN3Nj.mjs').then(n => n._),"../pages/blog/post-3.md": () => import('./post-3_BXKHjvJ1.mjs').then(n => n._),"../pages/blog/post-4.md": () => import('./post-4_C9RR-lEF.mjs').then(n => n._),"../pages/blog/post-5.md": () => import('./post-5_Dj-7mu4E.mjs').then(n => n._),"../pages/blog/post-6.md": () => import('./post-6_B178puzM.mjs').then(n => n._)}), () => "../pages/blog/*.md");
  const formattedPosts = formatBlogPosts(allPosts, {
    sortByDate: false
  });
  const relatedPosts = formattedPosts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category.toLowerCase() && post.frontmatter.title !== title
  ).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "image": frontmatter.image, "frontmatter": frontmatter, "robots": frontmatter.robots }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHeader", $$PostHeader, { "title": title, "description": description, "date": date, "category": category, "image": image, "author": author })} ${maybeRenderHead()}<div class="post-content"> <div class="content"> ${renderSlot($$result2, $$slots["default"])} </div> <div class="sidebar"> <aside class="container" aria-label="Blog categories"> <h2 class="h3">Blog Categories</h2> ${renderComponent($$result2, "CategoryCloud", $$CategoryCloud, {})} </aside> ${relatedPosts.length > 0 && renderTemplate`<aside class="container" aria-label="Related posts"> <h2 class="h3">Related Posts</h2> ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "relatedPosts": relatedPosts })} </aside>`} </div> </div> ` })}`;
}, "D:/Astro/astro-blog-tutorial/src/layouts/BlogPostLayout.astro", void 0);

export { $$BlogPostLayout as $ };
