import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$Image } from './index_FvwMRqbz.mjs';
import { s as slugify, b as formatDate, $ as $$Link } from './MainLayout_Dt99Eh7a.mjs';

const $$Astro = createAstro("https://astro-blog-cip.netlify.app");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { frontmatter, url, tagType } = Astro2.props;
  const Tag = tagType;
  const { title, date, author, image, description, category } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<article class="card"> <small> <a${addAttribute(`/category/${slugify(category)}/`, "href")} class="badge">${category}</a> </small> <a${addAttribute(url, "href")} aria-hidden="true" tabindex="-1"> ${renderComponent($$result, "Image", $$Image, { "src": image.src, "alt": image.alt, "width": "400", "height": "250", "format": "webp", "fit": "cover", "quality": 80, "aspectRatio": "4:1" })} </a> <div class="content"> <div> ${renderComponent($$result, "Tag", Tag, { "class": "h3" }, { "default": ($$result2) => renderTemplate` <a${addAttribute(url, "href")}>${title}</a> ` })} <small>
by <a${addAttribute(`/author/${slugify(author)}/`, "href")}>${author}</a> • ${formatDate(date)} </small> </div> <p>${description}</p> ${renderComponent($$result, "Link", $$Link, { "href": url, "text": "Read Post", "style": "secondary" })} </div> </article>`;
}, "D:/Astro/astro-blog-tutorial/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };
