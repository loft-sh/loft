const { selectorMainNavLink, selectorTabNavLink, selectorLabels, selectorDrawerExpandables, selectorDrawerButton, selectorDrawerAccessRules, selectorDrawerTabs } = require("../../cypress/support/const")

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

    cy.get(selectorTabNavLink).contains('Cluster Access')
      .addFrame()

    cy.screenshot("tab-cluster-access")

    cy.get(selectorTabNavLink).contains('Cluster Access')
      .click()


    cy.hideCursor()
      .screenshot("view-cluster-access")


    cy.get('button').contains('Create Cluster Access').closest('button')
      .addFrame()

    cy.screenshot("button-create-cluster-access")


    cy.get('button').contains('Create Cluster Access').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-cluster-access")


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


    cy.get(selectorDrawerTabs).contains('Users')
      .addFrame()

    cy.screenshot("tab-users")


    cy.get(selectorLabels).contains('Cluster Access For Individual Users')
      .hideCursor()
      .screenshot("field-users")


    cy.get(selectorDrawerTabs).contains('Users in Teams')
      .addFrame()

    cy.screenshot("tab-team-members")

    cy.get(selectorDrawerTabs).contains('Users in Teams')
      .click()

    cy.hideCursor()
      .screenshot("drawer-tab-team-members")

    cy.get(selectorLabels).contains('Cluster Access For All Users')
      .hideCursor()
      .screenshot("field-members-by-team")


    cy.get(selectorDrawerTabs).eq(2)
      .addFrame()

    cy.screenshot("tab-teams")

    cy.get(selectorDrawerTabs).eq(2)
      .click()

    cy.hideCursor()
      .screenshot("drawer-tab-teams")

    cy.get(selectorLabels).contains('Cluster Access For These Teams')
      .hideCursor()
      .screenshot("field-teams")


    cy.get(selectorLabels).contains('Select Clusters')
      .hideCursor()
      .screenshot("field-clusters")


    cy.get(selectorDrawerExpandables).contains('Restrictions')
      .click()


    cy.get(selectorLabels).contains('Enforce Space Constraints')
      .hideCursor()
      .screenshot("field-space-constraints")


    cy.get(selectorLabels).contains('Enforce Quotas')
      .hideCursor()
      .screenshot("field-quotas")


    cy.get(selectorDrawerExpandables).contains('Advanced Options')
      .click()


    cy.get(selectorLabels).contains('Priority')
      .hideCursor()
      .screenshot("field-priority")


    cy.get(selectorLabels).contains('Extra Cluster Roles')
      .hideCursor()
      .screenshot("field-extra-clusterroles")


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