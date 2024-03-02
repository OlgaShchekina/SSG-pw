import {expect, type Page} from '@playwright/test'

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async open() {
        await this.page.goto('https://practice.expandtesting.com/login')
    }

    async login(username: string, password: string) {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('button[type="submit"]');
    }
    async pageHeader() {
        this.page.getByRole('heading', {name: 'Login Page'})
    }

    async loginErrorMessage(message: string) {
        await expect(this.page.locator('#flash')).toHaveText(message)
    }
}
