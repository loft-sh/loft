const { selectorModalButton, selectorLabels, selectorDrawerExpandables, selectorDrawerAccessRules, selectorDrawerButton, selectorMainNavLink, selectorDrawerTabs } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorMainNavLink).eq(2)
      .addFrame()

    cy.screenshot("nav-link-clusters")

    cy.get(selectorMainNavLink).eq(2)
      .click()


    cy.hideCursor()
      .screenshot("view-clusters")


    cy.get('button').contains('Connect Cluster').closest('button')
      .addFrame()

    cy.screenshot("button-connect-cluster")


    cy.get('button').contains('Connect Cluster').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-connect-cluster")


    cy.get(selectorLabels).contains('Display Name')
      .hideCursor()
      .screenshot("field-display-name")


    cy.get(selectorLabels).contains('Kubernetes Name')
      .hideCursor()
      .screenshot("field-name")


    cy.get(selectorDrawerExpandables).contains('Labels')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-annotations")


    cy.get(selectorDrawerButton).contains('Next').closest('button')
      .addFrame()

    cy.screenshot("button-next")

    cy.get(selectorDrawerButton).contains('Next').closest('button')
      .click()


    cy.get(selectorLabels).contains('kube-config')
      .hideCursor()
      .screenshot("field-kube-config")


    cy.get(selectorDrawerButton).contains('Connect').closest('button')
      .addFrame()

    cy.screenshot("button-connect")

    cy.get(selectorDrawerButton).contains('Connect').closest('button')
      .click()

  })
})