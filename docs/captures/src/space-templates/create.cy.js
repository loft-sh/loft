const { selectorDrawerExpandables, selectorLabels, selectorDrawerButton, selectorTabNavLink, selectorDrawerAccessRules } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.prepare()
    cy.wait(5000)

    cy.get(selectorTabNavLink).contains('Space Templates')
      .addFrame()

    cy.screenshot("tab-space-templates")

    cy.get(selectorTabNavLink).contains('Space Templates')
      .click()


    cy.hideCursor()
      .screenshot("view-space-templates")


    cy.get('button').contains('Add Space Template').closest('button')
      .addFrame()

    cy.screenshot("button-create-space-template")


    cy.get('button').contains('Add Space Template').closest('button')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-space-template")


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


    cy.get(selectorDrawerExpandables).contains('Space Labels')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-space-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-space-annotations")


    cy.get(selectorLabels).contains('Sleep After Inactivity')
      .hideCursor()
      .screenshot("field-inactivity-sleep")

    cy.get(selectorLabels).contains('Delete Space After Inactivity')
      .hideCursor()
      .screenshot("field-inactivity-delete")


    cy.get(selectorDrawerExpandables).contains('Sleep & WakeUp Schedule')
      .click()

    cy.get(selectorLabels).contains('Sleep Schedule')
      .hideCursor()
      .screenshot("field-schedule-sleep")

    cy.get(selectorLabels).contains('Wake up Schedule')
      .hideCursor()
      .screenshot("field-schedule-wakeup")

    cy.get(selectorLabels).contains('Schedule Timezone')
      .hideCursor()
      .screenshot("field-schedule-timezone")


    cy.get(selectorDrawerExpandables).contains('Deploy Apps')
      .click()

    cy.get(selectorLabels).contains('Which apps should get deployed within the space?')
      .hideCursor()
      .screenshot("field-apps")


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