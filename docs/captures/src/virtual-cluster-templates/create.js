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


    cy.get(selectorTabNavLink).contains('Virtual Cluster Templates')
      .addFrame()

    cy.screenshot("tab-virtual-cluster-templates")

    cy.get(selectorTabNavLink).contains('Virtual Cluster Templates')
      .click()


    cy.hideCursor()
      .screenshot("view-virtual-cluster-templates")


    cy.get('button').contains('Add Virtual Cluster Template').closest('button')
      .addFrame()

    cy.screenshot("button-create-virtual-cluster-template")


    cy.get('button').contains('Add Virtual Cluster Template').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-virtual-cluster-template")


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


    cy.get(selectorDrawerExpandables).contains('Virtual Cluster Labels')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-vcluster-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-vcluster-annotations")


    cy.get(selectorLabels).contains('Virtual Cluster Version')
      .hideCursor()
      .screenshot("field-vcluster-version")

    cy.get(selectorLabels).contains('Helm Values')
      .hideCursor()
      .screenshot("field-vcluster-values")

    cy.get(selectorLabels).contains('Which apps')
      .hideCursor()
      .screenshot("field-apps")


    cy.get(selectorDrawerExpandables).contains('Space Template')
      .click()

    cy.get(selectorLabels).contains('Space Template')
      .hideCursor()
      .screenshot("field-space-template")


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