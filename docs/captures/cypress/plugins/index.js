/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs')
const path = require('path')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config

    on('after:screenshot', (details) => {
        const targetDir = path.normalize(path.dirname(details.path.replace("/cypress/screenshots/", "/../static/media/v2/screenshots/").replace("/field-", "/../field-").replace(".js", "").replace(/_/g, "-")))
        const newPath = path.join(targetDir, path.basename(details.path))

        return new Promise((resolve, reject) => {
            if (fs.existsSync(newPath)) {
                fs.rmSync(newPath)
            } else if (fs.existsSync(targetDir) === false) {
                fs.mkdirSync(targetDir, { recursive: true })
            }

            fs.rename(details.path, newPath, (err) => {
                if (err) return reject(err)

                resolve({ path: newPath })
            })
        })
    })

    on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(
            'launching browser %s is headless? %s',
            browser.name,
            browser.isHeadless,
        )

        // the browser width and height we want to get
        // our screenshots and videos will be of that resolution
        const width = 1920
        const height = 1080

        console.log('setting the browser window size to %d x %d', width, height)

        if (browser.name === 'chrome') {
            launchOptions.args.push(`--window-size=${width},${height}`)

            // force screen to be non-retina and just use our given resolution
            launchOptions.args.push('--force-device-scale-factor=1')
        }

        if (browser.name === 'electron') {
            // might not work on CI for some reason
            launchOptions.preferences.width = width
            launchOptions.preferences.height = height
        }

        if (browser.name === 'firefox') {
            launchOptions.args.push(`--width=${width}`)
            launchOptions.args.push(`--height=${height}`)
        }

        // IMPORTANT: return the updated browser launch options
        return launchOptions
    })
}
