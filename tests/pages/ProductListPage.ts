import type { Locator, Page } from '@playwright/test'

export class ProductListPage {
  readonly page: Page
  readonly pageTitle: Locator


  constructor(page: Page) {
    this.page = page
    this.pageTitle = page.getByText("Products")
  }

}
