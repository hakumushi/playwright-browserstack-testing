import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium } from "@playwright/test"
import type { Browser, BrowserContext, Page } from "@playwright/test"

const DEFAULT_TIMEOUT = 30000

setDefaultTimeout(DEFAULT_TIMEOUT)

export class CustomWorld {
    page: Page
    browser: Browser
    context: BrowserContext
    url: string

    constructor(page: Page, browser: Browser, context: BrowserContext) {
        this.page = page
        this.browser = browser
        this.context = context
        this.url = "https://www.saucedemo.com"
    }

    async starting() {
        const headless = false
        this.browser = await chromium.launch({headless,})
        this.context = await this.browser.newContext()
        this.page = await this.context.newPage()
    }

    async finishing() {
        await this.context.close()
        await this.browser.close()
    }

}

setWorldConstructor(CustomWorld)
