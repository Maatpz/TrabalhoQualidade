describe('Teste 4: teste de Logout', () => {
  it('Deve logar e deslogar do site com sucesso', () => {
    cy.visit('http://automationexercise.com/')
    cy.get('body').should('be.visible')
    cy.contains('a', 'Signup / Login').click()
    cy.contains('h2', 'Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type('testandocypress@email.com')
    cy.get('[data-qa="login-password"]').type('1234')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('a', 'Logged in as').should('be.visible')
    cy.contains('a', 'Logout').click()
    cy.contains('h2', 'Login to your account').should('be.visible')
  })
})