import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { ProductListPage } from './pages/ProductListPage'

test("Successful login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  const loginPage = new LoginPage(page)
  const productListPage = new ProductListPage(page)

  await loginPage.login("standard_user", "secret_sauce")

  await expect(productListPage.pageTitle).toBeVisible()
})

test("Wrong password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  const loginPage = new LoginPage(page)

  await loginPage.login("standard_user", "secret-sauce")
  expect(await loginPage.errorMessage.innerText()).toEqual("Epic sadface: Username and password do not match any user in this service")
})

test("Wrong login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  const loginPage = new LoginPage(page)

  await loginPage.login("standard-user", "secret_sauce")
  expect(await loginPage.errorMessage.innerText()).toEqual("Epic sadface: Username and password do not match any user in this service")
})

test("Locked used", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  const loginPage = new LoginPage(page)

  await loginPage.login("locked_out_user", "secret_sauce")
  expect(await loginPage.errorMessage.innerText()).toEqual("Epic sadface: Sorry, this user has been locked out.")
})
