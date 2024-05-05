import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatBlogPosts, s as slugify } from './MainLayout_Dt99Eh7a.mjs';

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
const $$CategoryCloud = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryCloud;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/blog/post-1.md": () => import('./post-1_D_28A6AA.mjs').then(n => n._),"../pages/blog/post-2.md": () => import('./post-2_DokqN3Nj.mjs').then(n => n._),"../pages/blog/post-3.md": () => import('./post-3_BXKHjvJ1.mjs').then(n => n._),"../pages/blog/post-4.md": () => import('./post-4_C9RR-lEF.mjs').then(n => n._),"../pages/blog/post-5.md": () => import('./post-5_Dj-7mu4E.mjs').then(n => n._),"../pages/blog/post-6.md": () => import('./post-6_B178puzM.mjs').then(n => n._)}), () => "../pages/blog/*.md");
  const formattedPosts = formatBlogPosts(allPosts);
  const allCategories = formattedPosts.map((cat) => cat.frontmatter.category.toLowerCase()).flat();
  const processedCats = allCategories.reduce((acc, category) => {
    const value = acc[category] || 0;
    return {
      ...acc,
      [category]: value + 1
    };
  }, {});
  const { showCount } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="categories"> ${Object.entries(processedCats).map(([key, val]) => renderTemplate`<a class="badge"${addAttribute(`/category/${slugify(key)}/`, "href")}>${key} ${showCount && `(${val})`}</a>`)} </ul>`;
}, "D:/Astro/astro-blog-tutorial/src/components/CategoryCloud.astro", void 0);

export { $$CategoryCloud as $ };
