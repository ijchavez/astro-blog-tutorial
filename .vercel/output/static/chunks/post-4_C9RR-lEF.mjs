import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$BlogPostLayout } from './BlogPostLayout_DFadNjKG.mjs';

const html = "<p>Playwright is an open-source browser automation library that allows developers and testers to efficiently and reliably automate interactions with web browsers. In this post, we’ll explore the advantages of using Playwright, how to set it up, and how to write your first test.</p>\n<h2 id=\"advantages-of-using-playwright\">Advantages of Using Playwright</h2>\n<ul>\n<li>Multi-Browser Support: Playwright works with multiple browsers, including Chromium (Chrome, Edge), Firefox, and WebKit (Safari), allowing consistent testing across different environments.</li>\n<li>Multi-Platform Support: You can use Playwright to test applications on various platforms such as mobile (Android), web, and desktop (MacOS, Linux, Windows).</li>\n<li>Mobile Emulation: Playwright can emulate mobile devices, including geolocation, screen size, and other device-specific features.</li>\n<li>Language Support: Initially built for Node.js, Playwright now provides bindings for JavaScript, TypeScript, Python, Java, and C#/.NET, making it accessible to a wider range of developers and testers.</li>\n<li>Headless and GUI Modes: You can run browsers in headless mode (without a graphical user interface) for faster execution in test environments and in GUI mode for development and debugging.</li>\n</ul>\n<h2 id=\"initial-playwright-setup\">Initial Playwright Setup</h2>\n<p>To get started with Playwright, you’ll need to install it in your project. Here’s a basic guide for setting up your Playwright environment:</p>\n<h3 id=\"installation\">Installation:</h3>\n<ul>\n<li>Run the command to install Playwright and select the options presented during installation.</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>npm init playwright@latest</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<ul>\n<li>Configuration: Playwright will create a configuration file where you can adjust settings such as the test directory, retry count, browsers to use, and more.</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>playwright.config.ts</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<h2 id=\"writing-your-first-test-in-playwright\">Writing Your First Test in Playwright</h2>\n<p>Once you have Playwright set up, it’s time to write your first test. Here’s a simple example of what it might look like:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>import { test, expect } from '@playwright/test';</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>test('verify page title', async ({ page }) => {</span></span>\n<span class=\"line\"><span>  await page.goto('https://seleniumjavalocators.neocities.org/');</span></span>\n<span class=\"line\"><span>  await expect(page).toHaveTitle(\"Ejemplo de Localización de Elementos\");</span></span>\n<span class=\"line\"><span>});</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>This test navigates to <a href=\"https://seleniumjavalocators.neocities.org/\">https://seleniumjavalocators.neocities.org/</a> and verifies that the page title contains the phrase “Your Website.”</p>\n<h2 id=\"bottomline\">Bottomline</h2>\n<p>Playwright is a powerful and flexible tool for browser test automation. With its multi-browser support, multi-platform capabilities, and ease of use, Playwright is quickly becoming the preferred choice for many developers and testers.</p>\n<p>If you’re looking for a modern, efficient, and reliable automation solution, definitely consider Playwright for your next testing projects.</p>\n<p>I hope this draft serves as a starting point for your blog post. If you need more details or want to expand any section, feel free to ask!</p>";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"Introduction to Playwright","date":"2022-12-09T00:00:00.000Z","author":"Gerardo Chavez","image":{"src":"/images/Playwright-logo.png","alt":"playwright"},"description":"Next-Level Test Automation","draft":false,"category":"Playwright"};
				const file = "D:/Astro/astro-blog-tutorial/src/pages/blog/post-4.md";
				const url = "/blog/post-4";
				function rawContent() {
					return "\nPlaywright is an open-source browser automation library that allows developers and testers to efficiently and reliably automate interactions with web browsers. In this post, we’ll explore the advantages of using Playwright, how to set it up, and how to write your first test.\n\n## Advantages of Using Playwright\n\n- Multi-Browser Support: Playwright works with multiple browsers, including Chromium (Chrome, Edge), Firefox, and WebKit (Safari), allowing consistent testing across different environments.\n- Multi-Platform Support: You can use Playwright to test applications on various platforms such as mobile (Android), web, and desktop (MacOS, Linux, Windows).\n- Mobile Emulation: Playwright can emulate mobile devices, including geolocation, screen size, and other device-specific features.\n- Language Support: Initially built for Node.js, Playwright now provides bindings for JavaScript, TypeScript, Python, Java, and C#/.NET, making it accessible to a wider range of developers and testers.\n- Headless and GUI Modes: You can run browsers in headless mode (without a graphical user interface) for faster execution in test environments and in GUI mode for development and debugging.\n\n## Initial Playwright Setup\n\nTo get started with Playwright, you’ll need to install it in your project. Here’s a basic guide for setting up your Playwright environment:\n\n### Installation: \n  - Run the command to install Playwright and select the options presented during installation.\n\n  ```\n  npm init playwright@latest\n  ``` \n  - Configuration: Playwright will create a configuration file where you can adjust settings such as the test directory, retry count, browsers to use, and more.\n\n  ```\n  playwright.config.ts\n  ```\n\n## Writing Your First Test in Playwright\n\nOnce you have Playwright set up, it’s time to write your first test. Here’s a simple example of what it might look like:\n\n```\nimport { test, expect } from '@playwright/test';\n\ntest('verify page title', async ({ page }) => {\n  await page.goto('https://seleniumjavalocators.neocities.org/');\n  await expect(page).toHaveTitle(\"Ejemplo de Localización de Elementos\");\n});\n```\nThis test navigates to https://seleniumjavalocators.neocities.org/ and verifies that the page title contains the phrase “Your Website.”\n\n## Bottomline\n\nPlaywright is a powerful and flexible tool for browser test automation. With its multi-browser support, multi-platform capabilities, and ease of use, Playwright is quickly becoming the preferred choice for many developers and testers.\n\nIf you’re looking for a modern, efficient, and reliable automation solution, definitely consider Playwright for your next testing projects.\n\nI hope this draft serves as a starting point for your blog post. If you need more details or want to expand any section, feel free to ask!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"advantages-of-using-playwright","text":"Advantages of Using Playwright"},{"depth":2,"slug":"initial-playwright-setup","text":"Initial Playwright Setup"},{"depth":3,"slug":"installation","text":"Installation:"},{"depth":2,"slug":"writing-your-first-test-in-playwright","text":"Writing Your First Test in Playwright"},{"depth":2,"slug":"bottomline","text":"Bottomline"}];
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

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_3 as _ };
