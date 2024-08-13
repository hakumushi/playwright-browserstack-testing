import type { Locator, Page } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly loginButton: Locator
  readonly errorMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameField = page.getByPlaceholder("Username")
    this.passwordField = page.getByPlaceholder("Password")
    this.loginButton = page.getByText("Login")
    this.errorMessage = page.locator('.error-message-container')
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.loginButton.click()
  }

}
