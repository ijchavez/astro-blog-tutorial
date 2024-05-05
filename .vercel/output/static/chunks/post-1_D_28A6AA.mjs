import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$BlogPostLayout } from './BlogPostLayout_DFadNjKG.mjs';

const html = "<h3 id=\"implicit-wait\">Implicit Wait</h3>\n<p>The implicit wait is a global wait that applies to all elements on the page. You set it once, and it automatically applies to all element location calls throughout the session. If an element is not immediately available, Selenium will wait for the specified time before throwing an exception.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<h3 id=\"explicit-wait\">Explicit Wait</h3>\n<p>The explicit wait is used to wait for specific conditions on an element before performing an action. You can wait until an element is visible, clickable, or has a specific value.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>WebDriverWait wait = new WebDriverWait(driver, 10);</span></span>\n<span class=\"line\"><span>wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"elementId\")));</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<h3 id=\"fluent-wait\">Fluent Wait</h3>\n<p>The fluent wait combines aspects of both implicit and explicit waits. You can wait for an element until a specific condition is met or until the maximum time is exceeded. It’s more flexible than implicit wait and more precise than explicit wait</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>FluentWait&#x3C;WebDriver> wait = new FluentWait&#x3C;>(driver)</span></span>\n<span class=\"line\"><span>    .withTimeout(Duration.ofSeconds(10))</span></span>\n<span class=\"line\"><span>    .pollingEvery(Duration.ofMillis(500))</span></span>\n<span class=\"line\"><span>    .ignoring(NoSuchElementException.class);</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"elementId\")));</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Conclusion\nWaits are essential to ensure stable and reliable test execution. Use implicit wait for a global timeout and explicit or fluent wait for specific conditions.</p>";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"Waits in Selenium","date":"2023-12-30T00:00:00.000Z","author":"Gerardo Chavez","image":{"src":"/images/selenium.webp","alt":"Selenium"},"description":"When automating web applications, handling waits is crucial to ensure that your test scripts interact with elements at the right time","draft":false,"category":"Selenium"};
				const file = "D:/Astro/astro-blog-tutorial/src/pages/blog/post-1.md";
				const url = "/blog/post-1";
				function rawContent() {
					return "\n### Implicit Wait\nThe implicit wait is a global wait that applies to all elements on the page. You set it once, and it automatically applies to all element location calls throughout the session. If an element is not immediately available, Selenium will wait for the specified time before throwing an exception.\n\n```\ndriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);\n```\n\n### Explicit Wait\nThe explicit wait is used to wait for specific conditions on an element before performing an action. You can wait until an element is visible, clickable, or has a specific value.\n\n```\nWebDriverWait wait = new WebDriverWait(driver, 10);\nwait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"elementId\")));\n```\n\n### Fluent Wait\nThe fluent wait combines aspects of both implicit and explicit waits. You can wait for an element until a specific condition is met or until the maximum time is exceeded. It’s more flexible than implicit wait and more precise than explicit wait\n\n```\nFluentWait<WebDriver> wait = new FluentWait<>(driver)\n    .withTimeout(Duration.ofSeconds(10))\n    .pollingEvery(Duration.ofMillis(500))\n    .ignoring(NoSuchElementException.class);\n\nwait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"elementId\")));\n```\n\nConclusion\nWaits are essential to ensure stable and reliable test execution. Use implicit wait for a global timeout and explicit or fluent wait for specific conditions.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"implicit-wait","text":"Implicit Wait"},{"depth":3,"slug":"explicit-wait","text":"Explicit Wait"},{"depth":3,"slug":"fluent-wait","text":"Fluent Wait"}];
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

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_0 as _ };
