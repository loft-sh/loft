const { selectorTableCells, selectorTableActionCell, selectorEditActionButton, selectorDrawerAccessRules, selectorDrawerExpandables, selectorLabels, selectorDrawerButton, selectorMainNavLink } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.visit("/")
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorMainNavLink).eq(2)
      .addFrame()

    cy.screenshot("nav-link-clusters")

    cy.get(selectorMainNavLink).eq(2)
      .click()


    cy.hideCursor()
      .screenshot("view-clusters")


    cy.get(selectorTableCells).contains('Local').closest('tr').find(selectorTableActionCell)
      .addFrame()
      .hover()

    cy.get(selectorTableCells).contains('Local').closest('tr').find(selectorEditActionButton).last().hover()

    cy.screenshot("action-edit")


    cy.get(selectorTableCells).contains('Local').closest('tr').find(selectorEditActionButton).last().click()

    cy.screenshot("drawer-edit-cluster")


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


    cy.get(selectorDrawerExpandables).contains('Default Templates')
      .click()

    cy.get(selectorLabels).contains('Default Space Template')
      .hideCursor()
      .screenshot("field-default-space-template")

    cy.get(selectorLabels).contains('Default Virtual Cluster Template')
      .hideCursor()
      .screenshot("field-default-virtual-cluster-template")


    cy.get(selectorDrawerExpandables).contains('Agent')
      .click()

    cy.get(selectorLabels).contains('Manage Loft Agent')
      .hideCursor()
      .screenshot("field-agent-ignore")

    cy.get(selectorLabels).contains('Agent Values')
      .hideCursor()
      .screenshot("field-agent-values")


    cy.get(selectorDrawerExpandables).contains('Direct Cluster Endpoint')
      .click()

    cy.get(selectorLabels).contains('Direct Cluster Endpoint')
      .hideCursor()
      .screenshot("field-direct-cluster-endpoint")


    cy.get(selectorDrawerExpandables).contains('Advanced Options')
      .click()

    cy.get(selectorLabels).contains('Insecure Endpoint')
      .hideCursor()
      .screenshot("field-endpoint-insecure")

    cy.get(selectorLabels).contains('Ca Cert')
      .hideCursor()
      .screenshot("field-endpoint-ca-cert")


    cy.get(selectorDrawerExpandables).contains('Access To')
      .click()

    cy.get(selectorDrawerAccessRules)
      .hideCursor()
      .screenshot("field-access")


    cy.get(selectorDrawerButton).contains('Update').closest('button')
      .addFrame()

    cy.screenshot("button-update")

    cy.get(selectorDrawerButton).contains('Update').closest('button')
      .click()
  })
})