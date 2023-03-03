const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e9s778',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
