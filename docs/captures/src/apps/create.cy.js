const { selectorModalButton, selectorLabels, selectorDrawerExpandables, selectorDrawerAccessRules, selectorDrawerButton, selectorMainNavLink, selectorDrawerTabs } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorMainNavLink).contains('Apps')
      .addFrame()

    cy.screenshot("nav-link-apps")

    cy.get(selectorMainNavLink).contains('Apps')
      .click()


    cy.hideCursor()
      .screenshot("view-apps")


    cy.get('button').contains('Add App').closest('button')
      .addFrame()

    cy.screenshot("button-create-app")


    cy.get('button').contains('Add App').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-app")


    cy.get(selectorLabels).contains('Display Name')
      .hideCursor()
      .screenshot("field-display-name")


    cy.get(selectorLabels).contains('Kubernetes Name')
      .hideCursor()
      .screenshot("field-name")


    cy.get(selectorDrawerExpandables).contains('Description')
      .click()

    cy.get(selectorLabels).contains('Description')
      .hideCursor()
      .screenshot("field-description")


    cy.get(selectorDrawerExpandables).contains('Labels')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-annotations")


    cy.get(selectorDrawerTabs).contains('kubectl')
      .addFrame()

    cy.screenshot("tab-kubectl")


    cy.get(selectorLabels).contains('Kubernetes Manifests')
      .hideCursor()
      .screenshot("field-kubernetes-manifests")


    cy.get(selectorDrawerTabs).contains('helm')
      .addFrame()

    cy.screenshot("tab-helm")

    cy.get(selectorDrawerTabs).contains('helm')
      .click()

    cy.hideCursor()
      .screenshot("drawer-tab-helm")


    cy.get(selectorLabels).contains('Chart Name')
      .hideCursor()
      .screenshot("field-helm-chart-name")

    cy.get(selectorLabels).contains('Chart Version')
      .hideCursor()
      .screenshot("field-helm-chart-version")

    cy.get(selectorLabels).contains('Chart Repository URL')
      .hideCursor()
      .screenshot("field-helm-chart-repo-url")

    cy.get(selectorLabels).contains('Chart Repository Username')
      .hideCursor()
      .screenshot("field-helm-chart-repo-username")

    cy.get(selectorLabels).contains('Chart Repository Password')
      .hideCursor()
      .screenshot("field-helm-chart-repo-password")

    cy.get(selectorLabels).contains('Chart Values')
      .hideCursor()
      .screenshot("field-helm-chart-values")

    cy.get(selectorLabels).contains('Skip TLS')
      .hideCursor()
      .screenshot("field-helm-chart-skip-tls")


    cy.get(selectorDrawerTabs).contains('bash')
      .addFrame()

    cy.screenshot("tab-bash")

    cy.get(selectorDrawerTabs).contains('bash')
      .click()

    cy.hideCursor()
      .screenshot("drawer-tab-bash")


    cy.get(selectorLabels).contains('Script')
      .hideCursor()
      .screenshot("field-bash-script")


    cy.get(selectorLabels).contains('Wait')
      .hideCursor()
      .screenshot("field-wait")


    cy.get(selectorDrawerExpandables).contains('Parameters')
      .click()

    cy.get(selectorLabels).contains('App Parameters')
      .hideCursor()
      .screenshot("field-parameters")


    cy.get(selectorDrawerExpandables).contains('Display Options')
      .click()

    cy.get(selectorLabels).contains('App Icon')
      .hideCursor()
      .screenshot("field-app-icon")

    cy.get(selectorLabels).contains('Recommend App')
      .hideCursor()
      .screenshot("field-app-recommended")


    cy.get(selectorDrawerExpandables).contains('Readme')
      .click()

    cy.get(selectorLabels).contains('App Readme')
      .hideCursor()
      .screenshot("field-app-readme")


    cy.get(selectorDrawerExpandables).contains('Access To')
      .click()

    cy.get(selectorDrawerAccessRules)
      .hideCursor()
      .screenshot("field-access")


    cy.get(selectorDrawerButton).contains('Create').closest('button')
      .addFrame()

    cy.screenshot("button-create")

    cy.get(selectorDrawerButton).contains('Create').closest('button')
      .click()
  })
})