const { selectorMainNavLink, selectorTabNavLink, selectorLabels, selectorDrawerExpandables, selectorDrawerButton, selectorDrawerAccessRules } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorMainNavLink).contains('Users')
      .addFrame()

    cy.screenshot("nav-link-users")

    cy.get(selectorMainNavLink).contains('Users')
      .click()

    cy.get(selectorTabNavLink).contains('Teams')
      .addFrame()

    cy.screenshot("tab-teams")

    cy.get(selectorTabNavLink).contains('Teams')
      .click()


    cy.hideCursor()
      .screenshot("view-teams")


    cy.get('button').contains('Add Team').closest('button')
      .addFrame()

    cy.screenshot("button-create-team")


    cy.get('button').contains('Add Team').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-team")


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


    cy.get(selectorLabels).contains('Users as Members')
      .hideCursor()
      .screenshot("field-members-users")

    cy.get(selectorLabels).contains('Kubernetes Groups')
      .hideCursor()
      .screenshot("field-members-groups")


    cy.get(selectorDrawerExpandables).contains('Advanced Options')
      .click()

    cy.get(selectorLabels).contains('Cluster Roles')
      .hideCursor()
      .screenshot("field-clusterroles")

    cy.get(selectorDrawerExpandables).contains('Image Pull Secrets')
      .click()

    cy.get(selectorLabels).contains('Assigned Image Pull')
      .hideCursor()
      .screenshot("field-pull-secrets")


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