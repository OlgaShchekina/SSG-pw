import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';

test.describe('Login Functionality Tests', () => {
    let login: LoginPage

    test.beforeEach('open the login page', async ({page}) => {
        login = new LoginPage(page);
        await login.goto()
    })

    test('Successful login and logout with valid credentials', async ({page}) => {
        // login
        await login.fillUsernameField('practice')
        await login.fillPasswordField('SuperSecretPassword!')
        await login.submitLoginForm()

        await login.loginResultMessage('You logged into a secure area!')

        // logout
        const logout = page.getByRole('link', {name: 'Logout'})
        await logout.click()

        await login.loginResultMessage('You logged out of the secure area!')
        await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
    })

    test('Error message with empty credentials', async ({page}) => {
        await login.fillUsernameField('')
        await login.fillPasswordField('')
        await login.submitLoginForm()

        await login.loginResultMessage('Your username is invalid!')
    })

    test('Error message with invalid username', async ({page}) => {
        const invalidUsernames = ['', 'test', 'Practice']

        for (const el of invalidUsernames) {
            await login.fillUsernameField(el)
            await login.fillPasswordField('SuperSecretPassword!')
            await login.submitLoginForm()

            await login.loginResultMessage('Your username is invalid!')
        }
    })

    test('Error message with invalid password', async ({page}) => {
        const invalidPasswords = ['', 'test', 'supersecretpassword!']

        for (const el of invalidPasswords) {
            await login.fillUsernameField('practice')
            await login.fillPasswordField(el)
            await login.submitLoginForm()

            await login.loginResultMessage('Your password is invalid!')
        }
    })
})
