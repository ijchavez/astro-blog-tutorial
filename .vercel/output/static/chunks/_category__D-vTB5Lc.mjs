import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$PostCard } from './PostCard_DJxlU4xx.mjs';
import { s as slugify, f as formatBlogPosts, a as $$MainLayout } from './MainLayout_Dt99Eh7a.mjs';

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
async function getStaticPaths() {
  return [
    {
      params: { category: slugify("API") },
      props: { name: "API" }
    },
    ,
    {
      params: { category: slugify("Selenium") },
      props: { name: "Selenium" }
    },
    {
      params: { category: slugify("Playwright") },
      props: { name: "Playwright" }
    }
  ];
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const { name } = Astro2.props;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../blog/post-1.md": () => import('./post-1_D_28A6AA.mjs').then(n => n._),"../blog/post-2.md": () => import('./post-2_DokqN3Nj.mjs').then(n => n._),"../blog/post-3.md": () => import('./post-3_BXKHjvJ1.mjs').then(n => n._),"../blog/post-4.md": () => import('./post-4_C9RR-lEF.mjs').then(n => n._),"../blog/post-5.md": () => import('./post-5_Dj-7mu4E.mjs').then(n => n._),"../blog/post-6.md": () => import('./post-6_B178puzM.mjs').then(n => n._)}), () => "../blog/*.md");
  const formattedPosts = formatBlogPosts(allPosts);
  const catPosts = formattedPosts.filter((post) => slugify(post.frontmatter.category) === category);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Automaton Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container"${addAttribute(`Posts about ${name}`, "aria-label")}> <h1 class="h1">Posts about ${name}</h1> <div class="post-container"> ${catPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post.frontmatter, "url": post.url, "tagType": "h2" })}`)} </div> </section> ` })}`;
}, "D:/Astro/astro-blog-tutorial/src/pages/category/[category].astro", void 0);

const $$file = "D:/Astro/astro-blog-tutorial/src/pages/category/[category].astro";
const $$url = "/category/[category]";

export { $$category as default, $$file as file, getStaticPaths, $$url as url };
