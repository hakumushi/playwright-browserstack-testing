import { Given, Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage"
import { ProductListPage } from "../../pages/ProductListPage"

Given("I have login with the right credentials", async function () {
    const loginPage = new LoginPage(this.page)
    await loginPage.login("standard_user", "secret_sauce")
})

Given("I have login with the username {string} and password {string}", async function (username: string, password: string) {
    const loginPage = new LoginPage(this.page)
    await loginPage.login(username, password)
})

Then("I see the product list page", async function () {
    const productListPage = new ProductListPage(this.page)
    await expect(productListPage.pageTitle).toBeVisible()
})

Then("I see error message {string}", async function (message: string) {
    const loginPage = new LoginPage(this.page)
    expect(await loginPage.errorMessage.innerText()).toEqual(message)
})
