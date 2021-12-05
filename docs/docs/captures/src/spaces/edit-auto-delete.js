const { selectorLabels, selectorTableCells, selectorTableActionCell, selectorEditActionButton, selectorDrawerExpandables, selectorDrawerButton } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.visit("/")
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorTableCells).contains('myspace-').closest('tr').find(selectorTableActionCell)
      .click()
      .addFrame()

    cy.screenshot("action-edit")


    cy.get(selectorTableCells).contains('myspace-').closest('tr').find(selectorEditActionButton).last()
      .click()

    cy.screenshot("drawer-open")


    cy.get(selectorDrawerExpandables).contains('Sleep Mode')
      .click()

    cy.get(selectorLabels).contains('Delete Space After Inactivity').parent().find('input')
      .click()
      .type("14400")
      .hideCursor()


    cy.get(selectorDrawerButton).contains('Update').closest('button')
      .addFrame()

    cy.screenshot("button-update")
  })
})