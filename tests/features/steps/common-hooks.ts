import { Before, After } from '@cucumber/cucumber'

Before(async function () {
  await this.starting()
  await this.page.goto(this.url)
})

After(async function (scenario) {
  await this.finishing()
})
