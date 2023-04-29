import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    overwrite: false,
    json: true,
    html: true,
    charts: true,
    reportDir: "mochawesome-report",
    saveJson: true,
  },
  e2e: {
    setupNodeEvents(on) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
  },
  video: false,
  screenshotOnRunFailure: false,
});
