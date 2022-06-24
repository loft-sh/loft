const { selectorTableCells, selectorTableActionCell, selectorDeleteActionButton } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.visit("/")
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorTableCells).contains('myspace-').closest('tr').find(selectorTableActionCell)
      .click()
      .addFrame()

    cy.screenshot("action-delete")


    cy.get(selectorTableCells).contains('myspace-').closest('tr').find(selectorDeleteActionButton)
      .click()

    cy.screenshot("confirm-delete")
  })
})