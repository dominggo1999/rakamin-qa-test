/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";

require("dotenv").config();

const filterEnvVariables = (
  allowedPrefixes: string[],
): Record<string, string> => {
  const filteredEnv: Record<string, string> = {};
  for (const [key, value] of Object.entries(process.env)) {
    if (allowedPrefixes.some((prefix) => key.startsWith(prefix))) {
      filteredEnv[key] = value;
    }
  }

  return filteredEnv;
};

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
      // copy any needed variables from process.env to config.env
      config.env = {
        ...config.env,
        ...filterEnvVariables(["CYPRESS_"]),
      };

      require("cypress-mochawesome-reporter/plugin")(on);

      // const options: browserify.Options = {
      //   // eslint-disable-next-line @typescript-eslint/no-var-requires
      //   ...require("@cypress/browserify-preprocessor").defaultOptions,
      //   paths: [
      //     // the process.cwd() depends on the cypress process being started from
      //     // the project root. You can also use an absolute path here.
      //     resolve(`${process.cwd()}/cypress`),
      //     // Include any other path you want to access from cypress here
      //   ],
      //   typescript: require.resolve("typescript"),
      // };

      // on("file:preprocessor", cucumberPreprocessor(options));

      on(
        "file:preprocessor",
        require("@cypress/webpack-preprocessor")({
          webpackOptions: require("./webpack.config.js"),
        }),
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    baseUrl: "https://web-staging.rakamin.com",
    viewportWidth: 1366,
    viewportHeight: 768,
  },
  video: false,
  screenshotOnRunFailure: true,
});
