
import { expect, type Page } from '@playwright/test'

export class SecurePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page
    }

    async logout(){
        const logout = this.page.getByRole('link', {name: 'Logout'})
        await logout.click()
    }

    async sucessfullLoginMessage(message:string) {
        await expect(this.page.locator('#flash')).toHaveText(message)
    }
}




