# Rakamin QA Engineer Test

This project was created to complete the QA Engineer Test at Rakamin Academy. The project tests the VIX Checkout feature of https://web-staging.rakamin.com/.

## Running the Test Manually on a Local Machine

1. Clone this repository with `git clone git@github.com:dominggo1999/rakamin-qa-test.git`.
2. Run `pnpm install` to install all the dependencies.
3. Before starting the Cypress launcher, make sure to complete the following prerequisites:
   - Create a `.env` file and copy the content from `.env.example` to that file.
   - Create two new accounts and make sure the resume is filled and the account is verified.
   - Change the values of env variables inside `.env` to the values of those two new accounts.
4. Launch the Cypress test launcher (with GUI) on different browsers:
   - **Chrome:** `pnpm run cy:open:chrome`
   - **Firefox:** `pnpm run cy:open:firefox`
   - **Edge:** `pnpm run cy:open:edge`
5. You can also run the tests using headless browsers:
   - **Chrome:** `pnpm run test:chrome`
   - **Firefox:** `pnpm run test:firefox`
   - **Edge:** `pnpm run test:edge`
6. Running the tests using the commands in step number 5 will generate reports that can be found in the `/mochawesome-report` folder. You can open the `index.html` file to view the report, or you can run `pnpm run open-report` to open the `index.html` file in your default browser.

****If you want to add new env variables, make sure they have "CYPRESS_" prefix***

## Running the Test in Github Actions

1. If you are not familiar with Github, you can learn more about it [here](https://docs.github.com/en/get-started/quickstart/hello-world).
2. If you are not familiar with Github Actions, you can learn more about it [here](https://github.com/features/actions).
3. Fork this repository.
4. After that, you need to add the environment variables to Github secrets.
5. The GitHub actions for this repository are only triggered manually, so go to the Actions tab and trigger the "CI" action.
6. After the test finishes, you will find three different files that correspond to the three different browsers at the very bottom of the CI workflow details. You can read about how the file is being uploaded [here](https://github.com/actions/upload-artifact).
7. You can download those reports and open them on your local machine.

****If you want to add new env variables, make sure they have "CYPRESS_" prefix***

## Tech Stack

This project was created following the Cypress get started guide. But instead of just using pure JavaScript, this project uses TypeScript. This project use the [POM pattern](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/) to construct the test steps. The project also uses the following plugins/packages:

- [@cypress/webpack-preprocessor](https://github.com/cypress-io/cypress-webpack-preprocessor) for customizing the webpack config
- [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro/)
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) for writing the test features in Gherkin Syntax
- [esbuild-loader](https://github.com/esbuild-kit/esbuild-loader) to make webpack faster
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) for generating reports
- [cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events)

Other development tools: ESLint, Prettier, Husky, Lint-staged.
