---
#frontmatter
layout: "../../layouts/BlogPostLayout.astro"
title: Waits in Selenium
date: 2023-12-30
author: Gerardo Chavez
image: {
  src: "/images/selenium.webp",
  alt: "Selenium",
}
description: When automating web applications, handling waits is crucial to ensure that your test scripts interact with elements at the right time
draft: false
category: Selenium
---

### Implicit Wait
The implicit wait is a global wait that applies to all elements on the page. You set it once, and it automatically applies to all element location calls throughout the session. If an element is not immediately available, Selenium will wait for the specified time before throwing an exception.

```
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
```

### Explicit Wait
The explicit wait is used to wait for specific conditions on an element before performing an action. You can wait until an element is visible, clickable, or has a specific value.

```
WebDriverWait wait = new WebDriverWait(driver, 10);
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementId")));
```

### Fluent Wait
The fluent wait combines aspects of both implicit and explicit waits. You can wait for an element until a specific condition is met or until the maximum time is exceeded. It’s more flexible than implicit wait and more precise than explicit wait

```
FluentWait<WebDriver> wait = new FluentWait<>(driver)
    .withTimeout(Duration.ofSeconds(10))
    .pollingEvery(Duration.ofMillis(500))
    .ignoring(NoSuchElementException.class);

wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementId")));
```

Conclusion
Waits are essential to ensure stable and reliable test execution. Use implicit wait for a global timeout and explicit or fluent wait for specific conditions.