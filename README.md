# SSG - Login page tests

### POM object
- **pages** folder

In this folder, we place files with pages, ideally organized by either the page name or its URL.
In each page file, I've created a class with methods that we use in tests.

We can also group all element selectors in the constructor, creating unique names for them and using
them in methods. While this approach works well for a small project like this one, it may not be
ideal for a larger project. With a larger project, we could end up with a substantial list of elements,
making navigation challenging and potentially leading to the creation of duplicated elements

- **testData** folder

In this folder, we can store any necessary test data. In our case, for example, I've included a sample user's username and password.

- **tests** folder

Here we have all our spec files with tests

### Tests suits for the login page functionality
- test positive scenario with correct username and password + logout
- test with empty username and password fields
- tests with correct password but incorrect username
- tests with correct username but incorrect password

### Installation
If you want to run test locally, please follow these steps:

- Clone this repository
- Make sure you have `node.js` installed. If you don't, please visit official website for instructions
- Run `npm install` to install node modules
That's it, now you can run tests with `npm run test` - it will run test in 3 browsers (chromium, firefox, webkit) in parallel.
If you want to run test in ui mode, use `npx playwright test --ui` command
