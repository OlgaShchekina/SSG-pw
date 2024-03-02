# SSG - Login page tests

## POM object

In our case, we have only one Login page. I created a folder **page-objects** with a **loginPage.ts** file.
In this file, I created a LoginPage class with methods that we can use in spec files.

We can also place all element selectors in the constructor, create unique names for them,
and use them in methods. While this approach works well for a small project like this one,
it may not be ideal for a larger project. With a large project, we could end up with
a substantial list of elements, making navigation challenging, and leading to the creation
of duplicated elements.

## tests for the login functionality
- test positive scenario with correct username and password + logout
- test with empty username and password fields
- tests with correct password but wrong username
- tests with correct username but incorrect password

### Installation
If you want to run test locally, please follow these steps:

- Clone this repository
- Make sure you have `node.js` installed. If you don't, please visit official website for instructions
- Run `npm install` to install node modules
That's it, now you can run tests with `npm run test` - it will run test in 3 browsers (chromium, firefox, webkit) in parallel.
If you want to run test in ui mode, use `npm run test --ui` command
