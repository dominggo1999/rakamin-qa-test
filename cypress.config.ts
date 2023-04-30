import { defineConfig } from "cypress";
import cucumberPreprocessor from "cypress-cucumber-preprocessor";
import browserify from "@cypress/browserify-preprocessor";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    overwrite: false,
    json: true,
    html: true,
    charts: true,
    reportDir: "mochawesome-report",
    saveJson: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("cypress-mochawesome-reporter/plugin")(on);

      const options: browserify.Options = {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        ...require("@cypress/browserify-preprocessor").defaultOptions,
        typescript: require.resolve("typescript"),
      };

      on("file:preprocessor", cucumberPreprocessor(options));

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    baseUrl: "https://web-staging.rakamin.com",
  },
  video: false,
  screenshotOnRunFailure: true,
});
