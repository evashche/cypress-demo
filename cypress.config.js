const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // pageLoadTimeout: 6c00000,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
