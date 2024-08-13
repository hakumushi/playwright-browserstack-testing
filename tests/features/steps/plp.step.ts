import { Given, Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { ProductListPage } from "../../pages/ProductListPage"

Given("I have added {int} products to the PLP", async function (number: number) {
    const productListPage = new ProductListPage(this.page)
    for(let i=1; i < number+1; i++) {
      await productListPage.addingProductToBasket(i)
    }
})

Given("I remove a product from the basket", async function () {
    const productListPage = new ProductListPage(this.page)
    await productListPage.removingProductToBasket(1)
})

Then("I see the number on {string} on the shopping cart badge", async function (number: string) {
    const productListPage = new ProductListPage(this.page)
    expect(await productListPage.shoppingBadge.innerText()).toEqual(number)
})
