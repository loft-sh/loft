describe('', () => {
  it('Gets, types and asserts', () => {
    cy.visit("/")
    cy.prepare()

    cy.screenshot("login")
    cy.login()
  })
})