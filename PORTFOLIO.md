Playwright Automation Testing Portfolio

This repository demonstrates hands-on end-to-end test automation using Playwright with TypeScript.
It focuses on building maintainable UI tests using the Page Object Model (POM) and clean test architecture.

The project uses the SauceDemo application to simulate realistic e-commerce testing scenarios.

Application Under Test
SauceDemo

https://www.saucedemo.com/

Test areas covered:

Login validation

Inventory interactions

Add to cart functionality

Cart state verification

Automation Features Demonstrated

Playwright test framework

TypeScript test development

Page Object Model architecture

Locator abstraction

Cross-browser test execution

Structured test grouping

Maintainable test design

Tests currently run across:

Chromium

Firefox

WebKit

Repository Structure
pages/
   LoginPage.ts
   InventoryPage.ts
   CartPage.ts

tests/
   saucedemo.spec.ts

playwright.config.ts

pages/
Contains Page Object classes that manage locators and reusable page actions.

tests/
Contains Playwright test suites grouped by feature.

Skills Demonstrated

UI test automation

Page Object Model design

Test architecture organization

Cross-browser testing

Maintainable test structure

Locator strategy

Automation debugging using Playwright tools

Future Enhancements

Planned improvements for the project include:

Additional inventory and cart tests

Shared login setup using Playwright hooks

Expanded test coverage for checkout flow

Improved test data management