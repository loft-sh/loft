const { defineConfig } = require('cypress')

module.exports = defineConfig({
    viewportWidth: 1600,
    viewportHeight: 900,
    videoCompression: false,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: './src/**/*.cy.{js,jsx,ts,tsx}',
    },
})
