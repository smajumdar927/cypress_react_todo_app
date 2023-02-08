const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "txvkxh",
  "retries": 2,
  videoCompression: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
