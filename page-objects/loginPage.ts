import {expect, type Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://practice.expandtesting.com/login');
    }

    async fillUsernameField(username:string) {
        const usernameField = this.page.locator('#username')
        await usernameField.fill(username)
    }

    async fillPasswordField(password:string) {
        const passwordField = this.page.locator('#password')
        await passwordField.fill(password)
    }

    async submitLoginForm() {
        const loginBtn = this.page.getByRole('button', {name: 'Login'})
        await loginBtn.click()
    }

    async loginResultMessage(message:string) {
        await expect(this.page.locator('#flash')).toHaveText(message)
    }
}
