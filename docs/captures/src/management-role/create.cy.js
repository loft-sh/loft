const { selectorMainNavLink, selectorTabNavLink, selectorLabels, selectorDrawerExpandables, selectorDrawerButton, selectorDrawerAccessRules, selectorDrawerTabs } = require("../../cypress/support/const")

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

    cy.get(selectorTabNavLink).contains('Management Roles')
      .addFrame()

    cy.screenshot("tab-management-roles")

    cy.get(selectorTabNavLink).contains('Management Roles')
      .click()


    cy.hideCursor()
      .screenshot("view-management-roles")


    cy.get('button').contains('Create Role').closest('button')
      .addFrame()

    cy.screenshot("button-create-management-role")


    cy.get('button').contains('Create Role').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-management-role")


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


    cy.get(selectorDrawerTabs).contains('RBAC Rules')
      .addFrame()

    cy.screenshot("tab-rbac-rules")


    cy.get(selectorLabels).contains('RBAC Rules')
      .hideCursor()
      .screenshot("field-rbac-rules")


    cy.get(selectorDrawerTabs).contains('Aggregation')
      .addFrame()

    cy.screenshot("tab-aggregation")

    cy.get(selectorDrawerTabs).contains('Aggregation')
      .click()

    cy.hideCursor()
      .screenshot("drawer-tab-aggregation")


    cy.get(selectorLabels).contains('Aggregation Rule')
      .hideCursor()
      .screenshot("field-aggregation-rules")


    cy.get(selectorDrawerExpandables).contains('Labels & Annotations For ClusterRole')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-template-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-template-annotations")


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