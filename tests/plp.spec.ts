import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { ProductListPage } from './pages/ProductListPage'

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  const loginPage = new LoginPage(page)
  await loginPage.login("standard_user", "secret_sauce")
})

test("Add product to the basket through the PLP", async ({ page }) => {
  const productListPage = new ProductListPage(page)

  await productListPage.addingProductToBasket(1)
  expect(await productListPage.shoppingBadge.innerText()).toEqual("1")
})

test("Remove product from the basket through the PLP", async ({ page }) => {
  const productListPage = new ProductListPage(page)

  await productListPage.addingProductToBasket(1)
  await productListPage.addingProductToBasket(2)
  await productListPage.removingProductToBasket(1)
  expect(await productListPage.shoppingBadge.innerText()).toEqual("1")
})
