import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$BlogPostLayout } from './BlogPostLayout_DFadNjKG.mjs';

const html = "<p>As a software developer, you know the importance of writing clean and functional code. But even the best code can have bugs, leading to unhappy users and, in some cases, serious consequences. That’s why testing your software is crucial to ensure it works as intended. In this blog post, we’ll dive into the world of API testing using Jest and Supertest. By the end of this guide, you’ll have a solid foundation for testing your Node.js Express application and can feel confident in delivering high-quality, reliable software to your users.</p>\n<h2 id=\"installation-and-configuration\">Installation and Configuration</h2>\n<h3 id=\"install-jest-and-supertest\">Install Jest and Supertest:</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>npm install --save-dev jest supertest</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<h3 id=\"configure-jest\">Configure Jest</h3>\n<p>Open your package.json and add the following configuration for Jest:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>\"jest\": {</span></span>\n<span class=\"line\"><span>  \"testEnvironment\": \"node\",</span></span>\n<span class=\"line\"><span>  \"coveragePathIgnorePatterns\": [\"/node_modules/\"]</span></span>\n<span class=\"line\"><span>}</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>This basic configuration ensures that Jest is ready for testing our API. The coveragePathIgnorePatterns specifies a regex to exclude certain directories (e.g., node_modules) from code coverage analysis.</p>\n<h3 id=\"write-a-simple-test\">Write a Simple Test</h3>\n<p>Create a new directory called tests and add a file named sample.test.js. Inside this file, write a simple test:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>describe('GET a product', () => {</span></span>\n<span class=\"line\"><span>  it('get specific product', async () => {</span></span>\n<span class=\"line\"><span>    const response = await request(app)</span></span>\n<span class=\"line\"><span>      .get('https://productsapi-n5p2.onrender.com/api/v1/products/f3ba4fb4-02ab-4dc7-8e5e-e404b1b0a00c')</span></span>\n<span class=\"line\"><span>      .send(data);</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>    expect(response.statusCode).toEqual(200);</span></span>\n<span class=\"line\"><span>    expect(response.body.name).toEqual(\"Fantastic Granite Bike\");</span></span>\n<span class=\"line\"><span>  });</span></span>\n<span class=\"line\"><span>});</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>API testing with Jest and Supertest allows you to verify that your endpoints work as expected. By following this guide, you’ll be well-equipped to create robust and reliable APIs. Remember to test thoroughly, handle asynchronous code, and organize your test suites effectively.</p>";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"API Testing with Jest and Supertest: A Comprehensive Guide","date":"2022-12-06T00:00:00.000Z","author":"Gerardo Chavez","image":{"src":"/images/jest-supertest.jpg","alt":"jestsupertest"},"description":"Introduction to Jest/Supertest for QA Automation Engineers","draft":false,"category":"API"};
				const file = "D:/Astro/astro-blog-tutorial/src/pages/blog/post-6.md";
				const url = "/blog/post-6";
				function rawContent() {
					return "\nAs a software developer, you know the importance of writing clean and functional code. But even the best code can have bugs, leading to unhappy users and, in some cases, serious consequences. That’s why testing your software is crucial to ensure it works as intended. In this blog post, we’ll dive into the world of API testing using Jest and Supertest. By the end of this guide, you’ll have a solid foundation for testing your Node.js Express application and can feel confident in delivering high-quality, reliable software to your users.\n\n## Installation and Configuration\n\n### Install Jest and Supertest:\n\n```\nnpm install --save-dev jest supertest\n\n```\n### Configure Jest\nOpen your package.json and add the following configuration for Jest:\n\n```\n\"jest\": {\n  \"testEnvironment\": \"node\",\n  \"coveragePathIgnorePatterns\": [\"/node_modules/\"]\n}\n\n```\nThis basic configuration ensures that Jest is ready for testing our API. The coveragePathIgnorePatterns specifies a regex to exclude certain directories (e.g., node_modules) from code coverage analysis.\n\n### Write a Simple Test \nCreate a new directory called tests and add a file named sample.test.js. Inside this file, write a simple test:\n\n```\ndescribe('GET a product', () => {\n  it('get specific product', async () => {\n    const response = await request(app)\n      .get('https://productsapi-n5p2.onrender.com/api/v1/products/f3ba4fb4-02ab-4dc7-8e5e-e404b1b0a00c')\n      .send(data);\n\n    expect(response.statusCode).toEqual(200);\n    expect(response.body.name).toEqual(\"Fantastic Granite Bike\");\n  });\n});\n\n```\nAPI testing with Jest and Supertest allows you to verify that your endpoints work as expected. By following this guide, you’ll be well-equipped to create robust and reliable APIs. Remember to test thoroughly, handle asynchronous code, and organize your test suites effectively.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"installation-and-configuration","text":"Installation and Configuration"},{"depth":3,"slug":"install-jest-and-supertest","text":"Install Jest and Supertest:"},{"depth":3,"slug":"configure-jest","text":"Configure Jest"},{"depth":3,"slug":"write-a-simple-test","text":"Write a Simple Test"}];
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

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_5 as _ };
