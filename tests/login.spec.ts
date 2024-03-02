import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SecurePage } from '../pages/securePage';
import { user } from '../testData/userData'

test.describe('Login Functionality Tests', () => {
    let loginPage: LoginPage

    test.beforeEach('open the login page', async ({ page}) => {
        loginPage = new LoginPage(page);
        await loginPage.open()
    })

    test('Successful login and logout with valid credentials', async ({ page}) => {
        const securePage = new SecurePage(page)

        // login
        await loginPage.login(user.username, user.password)
        expect(securePage.sucessfullLoginMessage('You logged into a secure area!')).toBeTruthy()

        // logout
        await securePage.logout()
        expect(loginPage.pageHeader()).toBeTruthy()
    })

    test('Error message with empty credentials', async () => {
        await loginPage.login('', '')
        await loginPage.loginErrorMessage('Your username is invalid!')
    })

    test('Error message with invalid username', async () => {
        const invalidUsernames = ['', 'test', 'Practice']

        for (const el of invalidUsernames) {
            await loginPage.login(el, 'SuperSecretPassword!')
            await loginPage.loginErrorMessage('Your username is invalid!')
        }
    })

    test('Error message with invalid password', async () => {
        const invalidPasswords = ['', 'test', 'supersecretpassword!']

        for (const el of invalidPasswords) {
            await loginPage.login('practice', el)
            await loginPage.loginErrorMessage('Your password is invalid!')
        }
    })
})
