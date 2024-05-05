import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_l27wifRy.mjs';
import 'kleur/colors';
import { $ as $$BlogPostLayout } from './BlogPostLayout_DFadNjKG.mjs';

const html = "<p>RestAssured is an open-source Java library specifically designed for testing REST APIs. It provides a fluent and expressive API for making HTTP requests, validating responses, and performing assertions. Whether you’re validating RESTful APIs or interacting with web services, RestAssured simplifies the testing process.</p>\n<h2 id=\"setting-up-restassured-in-your-project\">Setting Up RestAssured in Your Project</h2>\n<h3 id=\"add-dependency\">Add Dependency</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>&#x3C;dependencies></span></span>\n<span class=\"line\"><span>    &#x3C;!-- Other dependencies --></span></span>\n<span class=\"line\"><span>    &#x3C;dependency></span></span>\n<span class=\"line\"><span>        &#x3C;groupId>io.rest-assured&#x3C;/groupId></span></span>\n<span class=\"line\"><span>        &#x3C;artifactId>rest-assured&#x3C;/artifactId></span></span>\n<span class=\"line\"><span>        &#x3C;version>4.4.0&#x3C;/version></span></span>\n<span class=\"line\"><span>        &#x3C;scope>test&#x3C;/scope></span></span>\n<span class=\"line\"><span>    &#x3C;/dependency></span></span>\n<span class=\"line\"><span>    &#x3C;dependency></span></span>\n<span class=\"line\"><span>        &#x3C;groupId>org.testng&#x3C;/groupId></span></span>\n<span class=\"line\"><span>        &#x3C;artifactId>testng&#x3C;/artifactId></span></span>\n<span class=\"line\"><span>        &#x3C;version>7.4.0&#x3C;/version></span></span>\n<span class=\"line\"><span>        &#x3C;scope>test&#x3C;/scope></span></span>\n<span class=\"line\"><span>    &#x3C;/dependency></span></span>\n<span class=\"line\"><span>&#x3C;/dependencies></span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<h3 id=\"write-your-first-restassured-test\">Write Your First RestAssured Test</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>import io.restassured.RestAssured;</span></span>\n<span class=\"line\"><span>import org.testng.annotations.Test;</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>public class ApiTests {</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>    @Test</span></span>\n<span class=\"line\"><span>    public void verifyStatusCode() {</span></span>\n<span class=\"line\"><span>        RestAssured.baseURI = \"https://api.example.com\";</span></span>\n<span class=\"line\"><span>        RestAssured.given()</span></span>\n<span class=\"line\"><span>            .when()</span></span>\n<span class=\"line\"><span>            .get(\"/users\")</span></span>\n<span class=\"line\"><span>            .then()</span></span>\n<span class=\"line\"><span>            .statusCode(200);</span></span>\n<span class=\"line\"><span>    }</span></span>\n<span class=\"line\"><span>}</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<h3 id=\"best-practices-for-api-testing-with-restassured\">Best Practices for API Testing with RestAssured</h3>\n<ul>\n<li>Organize Tests: Group related tests into test classes or packages.</li>\n<li>Use Data-Driven Testing: Parameterize your tests to cover different scenarios.</li>\n<li>Mock External Services: Use tools like WireMock to mock external APIs during testing.</li>\n<li>Schema Validation: Validate API responses against a predefined schema.</li>\n<li>Assertions: Leverage RestAssured’s built-in assertions for response validation.</li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"API Testing with RestAssured + Java","date":"2021-05-03T00:00:00.000Z","author":"Gerardo Chavez","image":{"src":"/images/Rest-Asure.png","alt":"RestAssure/Java"},"description":"we’ll cover the steps to create automated API tests using RestAssured, a powerful library for testing RESTful APIs.","draft":false,"category":"API"};
				const file = "D:/Astro/astro-blog-tutorial/src/pages/blog/post-3.md";
				const url = "/blog/post-3";
				function rawContent() {
					return "\nRestAssured is an open-source Java library specifically designed for testing REST APIs. It provides a fluent and expressive API for making HTTP requests, validating responses, and performing assertions. Whether you’re validating RESTful APIs or interacting with web services, RestAssured simplifies the testing process.\n\n## Setting Up RestAssured in Your Project\n### Add Dependency\n\n```\n<dependencies>\n    <!-- Other dependencies -->\n    <dependency>\n        <groupId>io.rest-assured</groupId>\n        <artifactId>rest-assured</artifactId>\n        <version>4.4.0</version>\n        <scope>test</scope>\n    </dependency>\n    <dependency>\n        <groupId>org.testng</groupId>\n        <artifactId>testng</artifactId>\n        <version>7.4.0</version>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n```\n### Write Your First RestAssured Test\n\n```\nimport io.restassured.RestAssured;\nimport org.testng.annotations.Test;\n\npublic class ApiTests {\n\n    @Test\n    public void verifyStatusCode() {\n        RestAssured.baseURI = \"https://api.example.com\";\n        RestAssured.given()\n            .when()\n            .get(\"/users\")\n            .then()\n            .statusCode(200);\n    }\n}\n```\n### Best Practices for API Testing with RestAssured\n\n- Organize Tests: Group related tests into test classes or packages.\n- Use Data-Driven Testing: Parameterize your tests to cover different scenarios.\n- Mock External Services: Use tools like WireMock to mock external APIs during testing.\n- Schema Validation: Validate API responses against a predefined schema.\n- Assertions: Leverage RestAssured’s built-in assertions for response validation.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"setting-up-restassured-in-your-project","text":"Setting Up RestAssured in Your Project"},{"depth":3,"slug":"add-dependency","text":"Add Dependency"},{"depth":3,"slug":"write-your-first-restassured-test","text":"Write Your First RestAssured Test"},{"depth":3,"slug":"best-practices-for-api-testing-with-restassured","text":"Best Practices for API Testing with RestAssured"}];
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

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_2 as _ };
