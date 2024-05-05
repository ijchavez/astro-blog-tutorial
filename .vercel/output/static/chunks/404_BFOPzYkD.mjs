import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$Image } from './index_FvwMRqbz.mjs';
import { $ as $$Link, a as $$MainLayout } from './MainLayout_Dt99Eh7a.mjs';

const fourZeroFoursImgs = [
    { src: "../images/404s/404.jpeg", alt: "404" },
    { src: "../images/404s/404-1.jpg", alt: "404-1" },
    { src: "../images/404s/404-2.jpg", alt: "404-2" },
    { src: "../images/404s/404-3.jpg", alt: "404-3" },
  ];
function randomFourZeroFoursImgs() {
    const randomIndex = Math.floor(Math.random() * fourZeroFoursImgs.length);
    return fourZeroFoursImgs[randomIndex];
  }

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const img = randomFourZeroFoursImgs();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Ooops..." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"${addAttribute({
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    gap: "var(--space-sm)"
  }, "style")}> <div> <h1 class="h1">Welp, this is awkward!</h1> <p>We seem to have misplaced something…</p> </div> ${renderComponent($$result2, "Image", $$Image, { "src": img.src, "alt": img.alt, "width": "900", "height": "450", "format": "avif", "fit": "cover", "quality": 80, "aspectRatio": "5:2", "class": "hero-image" })} ${renderComponent($$result2, "Link", $$Link, { "href": "/", "style": "secondary", "text": "Go Home", "icon": {
    name: "tabler:home",
    side: "right"
  } })} </div> ` })}`;
}, "D:/Astro/astro-blog-tutorial/src/pages/404.astro", void 0);

const $$file = "D:/Astro/astro-blog-tutorial/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
