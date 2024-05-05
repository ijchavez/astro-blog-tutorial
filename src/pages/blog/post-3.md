---
layout: "../../layouts/BlogPostLayout.astro"
title: API Testing with RestAssured + Java
date: 2021-05-03
author: Gerardo Chavez
image: {
  src: "/images/Rest-Asure.png",
  alt: "RestAssure/Java",
}
description: we’ll cover the steps to create automated API tests using RestAssured, a powerful library for testing RESTful APIs.
draft: false
category: API
---

RestAssured is an open-source Java library specifically designed for testing REST APIs. It provides a fluent and expressive API for making HTTP requests, validating responses, and performing assertions. Whether you’re validating RESTful APIs or interacting with web services, RestAssured simplifies the testing process.

## Setting Up RestAssured in Your Project
### Add Dependency

```
<dependencies>
    <!-- Other dependencies -->
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>rest-assured</artifactId>
        <version>4.4.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.4.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```
### Write Your First RestAssured Test

```
import io.restassured.RestAssured;
import org.testng.annotations.Test;

public class ApiTests {

    @Test
    public void verifyStatusCode() {
        RestAssured.baseURI = "https://api.example.com";
        RestAssured.given()
            .when()
            .get("/users")
            .then()
            .statusCode(200);
    }
}
```
### Best Practices for API Testing with RestAssured

- Organize Tests: Group related tests into test classes or packages.
- Use Data-Driven Testing: Parameterize your tests to cover different scenarios.
- Mock External Services: Use tools like WireMock to mock external APIs during testing.
- Schema Validation: Validate API responses against a predefined schema.
- Assertions: Leverage RestAssured’s built-in assertions for response validation.