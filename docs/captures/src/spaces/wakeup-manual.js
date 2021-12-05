const { selectorTableCells, selectorTableActionCell, selectorSleepActionButton, selectorModalButton } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.visit("/")
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorTableCells).contains('myspace-').closest('tr').find(selectorTableActionCell)
      .click()
      .addFrame()

    cy.screenshot("action-wakeup")


    cy.get(selectorTableCells).contains('myspace-').closest('tr').find(selectorSleepActionButton).last()
      .click()

    cy.screenshot("confirm-wakeup")


    cy.get(selectorModalButton).contains('Ok').closest('button')
      .click()


    cy.get(selectorTableCells).contains('myspace-').closest('tr').find(selectorTableCells).contains('Active')
      .addFrame()

    cy.screenshot("status-active")
  })
})