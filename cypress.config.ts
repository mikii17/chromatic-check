import { defineConfig } from "cypress";
import { installPlugin } from "@chromatic-com/cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installPlugin(on, config);
    },
    experimentalStudio: true,
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
  },
});
