const { test, expect } = require('@playwright/test')

test("Login Page Loaded", async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login')
  const title = await page.title()
  expect(title).toContain('Test Login Page for Automation')
})


test("Login Successful", async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login')
  await page.locator('//input[@id="username"]').fill('practice')
  await page.fill('//input[@id="password"]', 'SuperSecretPassword!')
  await page.click('//button[@id="submit-login"]')
  const url = await page.url()
  expect(url).toContain('/secure')
})


test("Login and logout flow", async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login')
  await page.locator('//input[@id="username"]').fill('practice')
  await page.fill('//input[@id="password"]', 'SuperSecretPassword!')
  await page.click('//button[@id="submit-login"]')
  const url = await page.url()
  expect(url).toContain('/secure')
  await page.getByRole('link', { name: 'Logout' }).click()
  const loginUrl = await page.url()
  expect(loginUrl).toContain('/login')
})

test("Invalid Login", async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login')
  await page.fill('//input[@id="username"]', 'mohan')
  await page.fill('//input[@id="password"]', 'pass123')
  await page.click('//button[@id="submit-login"]')
  const errorMessage = await page.locator("div[id='flash'] b").textContent()
  expect(errorMessage).toContain('password is invalid' || 'username is invalid')
})
