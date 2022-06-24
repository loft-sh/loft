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

    cy.get(selectorTabNavLink).contains('Space Constraints')
      .addFrame()

    cy.screenshot("tab-space-constraints")

    cy.get(selectorTabNavLink).contains('Space Constraints')
      .click()


    cy.hideCursor()
      .screenshot("view-space-constraints")


    cy.get('button').contains('Create Space Constraints').closest('button')
      .addFrame()

    cy.screenshot("button-create-space-constraints")


    cy.get('button').contains('Create Space Constraints').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-space-constraints")


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


    cy.get(selectorDrawerExpandables).contains('Enforce Resources')
      .click()
    /*
        cy.get(selectorLabels).contains('Specify which')
          .hideCursor()
          .screenshot("field-enforce-manifests")*/


    cy.get(selectorDrawerExpandables).contains('Enforce Space Settings')
      .click()

    cy.get(selectorLabels).contains('Sleep After')
      .hideCursor()
      .screenshot("field-sleep-timeout")

    cy.get(selectorLabels).contains('Delete Space After')
      .hideCursor()
      .screenshot("field-delete-timeout")


    cy.get(selectorDrawerExpandables).contains('Sleep & WakeUp Schedule')
      .click()

    cy.get(selectorLabels).contains('Sleep Schedule')
      .hideCursor()
      .screenshot("field-sleep-schedule")

    cy.get(selectorLabels).contains('Wake up Schedule')
      .hideCursor()
      .screenshot("field-wakeup-schedule")

    cy.get(selectorLabels).contains('Schedule Timezone')
      .hideCursor()
      .screenshot("field-schedule-timezone")


    cy.get(selectorDrawerExpandables).contains('Enforce Space Labels')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-enforced-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-enforced-annotations")


    cy.get(selectorDrawerExpandables).contains('Advanced Options')
      .click()

    cy.get(selectorLabels).contains('Sync')
      .hideCursor()
      .screenshot("field-sync")

    cy.get(selectorLabels).contains('Space Owner')
      .hideCursor()
      .screenshot("field-owner-role")


    cy.get(selectorDrawerExpandables).contains('Clusters')
      .click()

    cy.get(selectorLabels).contains('Select Clusters')
      .hideCursor()
      .screenshot("field-clusters")


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