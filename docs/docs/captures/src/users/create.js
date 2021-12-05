const { selectorModalButton, selectorLabels, selectorDrawerExpandables, selectorDrawerAccessRules, selectorDrawerButton, selectorMainNavLink } = require("../../cypress/support/const")

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


    cy.hideCursor()
      .screenshot("view-users")


    cy.get('button').contains('Add User').closest('button')
      .addFrame()

    cy.screenshot("button-create-user")


    cy.get('button').contains('Add User').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-user")


    cy.get(selectorLabels).contains('Display Name')
      .hideCursor()
      .screenshot("field-display-name")

    cy.get(selectorLabels).contains('Display Name').parent().find('input')
      .click()
      .type("Anna")


    cy.get(selectorLabels).contains('Kubernetes Name')
      .hideCursor()
      .screenshot("field-name")


    cy.get(selectorLabels).contains('Username')
      .hideCursor()
      .screenshot("field-username")


    cy.get(selectorLabels).contains('Email')
      .hideCursor()
      .screenshot("field-email")


    cy.get(selectorDrawerExpandables).contains('Set Password')
      .click()

    cy.get(selectorLabels).contains('User password')
      .hideCursor()
      .screenshot("field-password")


    cy.get(selectorDrawerExpandables).contains('Labels')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-annotations")

    cy.get(selectorDrawerExpandables).contains('Team Memberships')
      .click()

    cy.get(selectorLabels).contains('Teams')
      .hideCursor()
      .screenshot("field-teams")


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

    cy.get(selectorDrawerExpandables).contains('Groups')
      .click()

    cy.get(selectorLabels).contains('Groups')
      .hideCursor()
      .screenshot("field-groups")


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


    cy.get(selectorModalButton).contains('Copy & Close').closest('button')
      .click()
  })
})