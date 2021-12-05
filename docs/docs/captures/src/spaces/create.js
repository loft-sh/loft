const { selectorDrawerExpandables, selectorLabels, selectorDrawerButton, selectorMainNavLink } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.prepare()
    cy.wait(5000)

    cy.screenshot("view-spaces")

    cy.get(selectorMainNavLink).contains('Spaces')

    cy.get('button').contains('Create Space').closest('button')
      .addFrame()

    cy.screenshot("button-create-space")


    cy.get('button').contains('Create Space')
      .click()

    cy.hideCursor()
      .screenshot("drawer-create-space")


    cy.get(selectorLabels).contains('Owner')
      .hideCursor()
      .screenshot("field-owner")

    cy.get(selectorLabels).contains('Space Template')
      .hideCursor()
      .screenshot("field-template")

    cy.get(selectorLabels).contains('Kubernetes Name')
      .hideCursor()
      .screenshot("field-name")


    cy.get(selectorDrawerExpandables).contains('Labels & Annotations')
      .click()

    cy.get(selectorLabels).contains('Labels')
      .hideCursor()
      .screenshot("field-labels")

    cy.get(selectorLabels).contains('Annotations')
      .hideCursor()
      .screenshot("field-annotations")


    cy.get(selectorDrawerExpandables).contains('Sleep Mode')
      .click()

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


    cy.get(selectorDrawerExpandables).contains('Apps')
      .click()

    cy.get(selectorLabels).contains('Which apps should get deployed within the space?')
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