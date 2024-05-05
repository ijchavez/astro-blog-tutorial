import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$BlogPostLayout } from './BlogPostLayout_DFadNjKG.mjs';

const html = "<h2 id=\"writing-api-tests\">Writing API Tests</h2>\n<p>Let’s automate a simple API testing scenario:</p>\n<p>Make a GET request to the Random User API endpoint.\nValidate that the response status code is 200.\nVerify that the response contains the ‘info’ property.</p>\n<h2 id=\"example-api-test-in-cypress\">Example API Test in Cypress</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>context(\"GET /users\", () => {</span></span>\n<span class=\"line\"><span>    it(\"gets a list of users\", () => {</span></span>\n<span class=\"line\"><span>        cy.request(\"GET\", \"/users\").then((response) => {</span></span>\n<span class=\"line\"><span>            expect(response.status).to.eq(200);</span></span>\n<span class=\"line\"><span>            expect(response.body.results).to.have.length.greaterThan(0);</span></span>\n<span class=\"line\"><span>        });</span></span>\n<span class=\"line\"><span>    });</span></span>\n<span class=\"line\"><span>});</span></span>\n<span class=\"line\"><span></span></span></code></pre>";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"API testing with Cypress","date":"2022-11-25T00:00:00.000Z","author":"Gerardo Chavez","image":{"src":"/images/1_PpZk1knHjIadHW-lpWSsOQ.webp","alt":"CypressAPI"},"description":"Let’s dive into the world of API testing using Cypress. In this blog entry, we’ll explore how to perform API testing with Cypress.","draft":false,"category":"API"};
				const file = "D:/Astro/astro-blog-tutorial/src/pages/blog/post-2.md";
				const url = "/blog/post-2";
				function rawContent() {
					return "\n## Writing API Tests\n\nLet’s automate a simple API testing scenario:\n\nMake a GET request to the Random User API endpoint.\nValidate that the response status code is 200.\nVerify that the response contains the ‘info’ property.\n\n## Example API Test in Cypress\n\n```\ncontext(\"GET /users\", () => {\n    it(\"gets a list of users\", () => {\n        cy.request(\"GET\", \"/users\").then((response) => {\n            expect(response.status).to.eq(200);\n            expect(response.body.results).to.have.length.greaterThan(0);\n        });\n    });\n});\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"writing-api-tests","text":"Writing API Tests"},{"depth":2,"slug":"example-api-test-in-cypress","text":"Example API Test in Cypress"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_1 as _ };
