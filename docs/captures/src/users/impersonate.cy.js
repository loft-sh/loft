const { selectorTableCells, selectorTableActionCell, selectorModalButton, selectorActionButtonImpersonate } = require("../../cypress/support/const")

describe('', () => {
  it('Gets, types and asserts', () => {
    cy.login()
    cy.visit("/users")
    cy.prepare()
    cy.wait(5000)


    cy.get(selectorTableCells).contains('Anna').closest('tr').find(selectorTableActionCell)
      .click()
      .addFrame()

    cy.screenshot("actions-user")


    cy.get(selectorTableCells).contains('Anna').closest('tr').find(selectorActionButtonImpersonate)
      .addFrame()

    cy.screenshot("action-impersonate")

    cy.get(selectorTableCells).contains('Anna').closest('tr').find(selectorActionButtonImpersonate)
      .click()


    cy.screenshot("confirm-impersonate")


    cy.get(selectorModalButton).contains('Impersonate').closest('button')
      .click()


    cy.screenshot("view-impersonating")
  })
})