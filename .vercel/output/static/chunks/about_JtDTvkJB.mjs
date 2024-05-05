import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$Link, a as $$MainLayout } from './MainLayout_Dt99Eh7a.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About", "description": "My About Page", "robots": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container about" aria-label="About Me"> <img src="/images/headshot.jpg" alt="My headshot" width="200" height="330"> <div class="content"> <h1 class="h1">My Blog</h1> <p>
15+ year of experience as a Software Quality Analyst. In-depth understanding of Software Development Life Cycle including estimation, 
        planning, design and execution of tests plans in projects and complex environments for financial banking companies. Researcher and proactive, 
        enthusiastic about DevOps and Testing Automation practices.
</p> ${renderComponent($$result2, "Link", $$Link, { "href": "mailto:info.gerardo.chavez@gmail.com", "style": "primary", "text": "Contact Me" })} </div> </section> ` })}`;
}, "D:/Astro/astro-blog-tutorial/src/pages/about.astro", void 0);

const $$file = "D:/Astro/astro-blog-tutorial/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
