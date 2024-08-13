import type { Locator, Page } from '@playwright/test'

export class ProductListPage {
  readonly page: Page
  readonly pageTitle: Locator
  readonly addToBasket: Locator
  readonly removeFromBasket: Locator
  readonly shoppingBadge: Locator

  constructor(page: Page) {
    this.page = page
    this.pageTitle = page.getByText("Products")
    this.addToBasket = page.getByRole("button", { name: "Add to cart" })
    this.removeFromBasket = page.getByRole("button", { name: "Remove" })
    this.shoppingBadge = page.locator(".shopping_cart_badge")
  }

  async addingProductToBasket(number: number){
    await this.addToBasket.locator(`nth=${number-1}`).click()
  }
  
  async removingProductToBasket(number: number){
    await this.removeFromBasket.locator(`nth=${number-1}`).click()
  }

}
