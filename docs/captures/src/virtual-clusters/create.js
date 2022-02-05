const { selectorDrawerExpandables, selectorLabels, selectorDrawerButton, selectorTabNavLink, selectorMainNavLink, selectorDrawerAccessRules } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.prepare()
    cy.wait(5000)

    cy.get(selectorMainNavLink).contains('Virtual Clusters')
      .addFrame()

    cy.screenshot("nav-link-virtual-clusters")

    cy.get(selectorMainNavLink).contains('Virtual Clusters')
      .click()


    cy.hideCursor()
      .screenshot("view-virtual-clusters")


    cy.get('button').contains('Create Virtual Cluster').closest('button')
      .addFrame()

    cy.screenshot("button-create-virtual-cluster")


    cy.get('button').contains('Create Virtual Cluster').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-virtual-cluster")


    cy.get(selectorLabels).contains('Virtual Cluster Template')
      .hideCursor()
      .screenshot("field-template")


    cy.get(selectorLabels).contains('Name')
      .hideCursor()
      .screenshot("field-name")

    cy.get(selectorLabels).contains('Namespace')
      .hideCursor()
      .screenshot("field-namespace")


    cy.get(selectorDrawerExpandables).contains('Labels')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-annotations")


    cy.get(selectorDrawerExpandables).contains('Advanced Options')
      .click()

    cy.get(selectorLabels).contains('Virtual Cluster Version')
      .hideCursor()
      .screenshot("field-vcluster-version")

    cy.get(selectorLabels).contains('Helm Values')
      .hideCursor()
      .screenshot("field-vcluster-values")

    cy.get(selectorLabels).contains('Which apps')
      .hideCursor()
      .screenshot("field-apps")


    cy.get(selectorDrawerExpandables).contains('Access To')
      .click()

    cy.get(selectorLabels).contains('Who should have access')
      .hideCursor()
      .screenshot("field-access")


    cy.get(selectorDrawerButton).contains('Create').closest('button')
      .addFrame()

    cy.screenshot("button-create")

    cy.get(selectorDrawerButton).contains('Create').closest('button')
      .click()
  })
})