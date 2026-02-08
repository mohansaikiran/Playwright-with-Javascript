# Playwright-js — repo overview

Minimal Playwright Test project with a small suite of end-to-end checks and an HTML report.

## Key files
- Project manifest: [package.json](package.json)  
- Playwright configuration: [playwright.config.js](playwright.config.js) — reporter is set to `html` and trace is configured as `on-first-retry`. See the file for project/browser settings.
- Tests: [tests/test-assertion.spec.js](tests/test-assertion.spec.js) — contains multiple tests that use Playwright's [`test`](tests/test-assertion.spec.js) and [`expect`](tests/test-assertion.spec.js).
  - Notable tests: `Login Page Loaded`, `Login Successful`, `Login and logout flow` (open the file to inspect assertions and locators).
- Generated report: [playwright-report/index.html](playwright-report/index.html) — static HTML report produced by Playwright.
- Last run summary: [test-results/.last-run.json](test-results/.last-run.json)
- Repo ignores generated artifacts: [.gitignore](.gitignore)

## What the tests do
Open [tests/test-assertion.spec.js](tests/test-assertion.spec.js) to see test implementations. Tests navigate to `https://practice.expandtesting.com/login`, perform form input via `page.locator` / `page.fill` / `page.click`, and assert navigation or page title with [`expect`](tests/test-assertion.spec.js).

Example assertions in the repo:
- Title contains text in `Login Page Loaded`
- URL contains `/secure` after login in `Login Successful`
- Login + logout flow verifies redirect to `/login` after logout

## How to run locally
1. Install dependencies: npm install
2. To run the test automation: npx playwright test 
3. To check the html report: npx playwright show-report