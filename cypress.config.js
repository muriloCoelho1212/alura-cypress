const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: 'o8sxvk',
  e2e: {
    setupNodeEvents(on, config) {
      module.exports = defineConfig({
        projectId: "o8sxvk",
        e2e: {
          setupNodeEvents(on, config) {
            { "reporter"; "mochawesome",
              "reporterOptions"; 
                { "reportDir"; "cypress/report/mochawesome-report",
                  "overwrite"; true,
                  "html"; true,
                  "json"; true,
                  "code"; true,
                  "timestamp"; "mmddyyyy_HHMMss" }}
          }
        }
      })
    },
  },
});
