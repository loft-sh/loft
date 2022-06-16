const { selectorModalButton, selectorLabels, selectorDrawerExpandables, selectorDrawerAccessRules, selectorDrawerButton, selectorMainNavLink } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorMainNavLink).contains('Secrets')
      .addFrame()

    cy.screenshot("nav-link-secrets")

    cy.get(selectorMainNavLink).contains('Secrets')
      .click()


    cy.hideCursor()
      .screenshot("view-secrets")


    cy.get('button').contains('Add Shared Secret').closest('button')
      .addFrame()

    cy.screenshot("button-create-secret")


    cy.get('button').contains('Add Shared Secret').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-secret")


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



    cy.get(selectorDrawerExpandables).contains('Namespace')
      .click()

    cy.get(selectorLabels).contains('Namespace')
      .hideCursor()
      .screenshot("field-namespace")


    cy.get(selectorLabels).contains('Data')
      .hideCursor()
      .screenshot("field-data")


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