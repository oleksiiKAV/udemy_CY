const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/integration/**/*.{js,feature,features,js}'],
    
    projectId: 'w184x8',  
    "defaultCommandTimeout": 5000,
    "pageLoadTimeout" : 30000,
    //"retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
    //  "runMode": 2,
    //}
  },
  reporter: 'mochawesome'
});
