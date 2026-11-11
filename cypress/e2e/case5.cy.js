describe('Teste 5: teste de resgistro com email já cadastrado', () => {
  it('Deve tentar registrar um novo usuário com um email já cadastrado', () => {
    cy.visit('http://automationexercise.com/')
    cy.get('body').should('be.visible')
    cy.contains('a', 'Signup / Login').click()
    cy.contains('h2', 'New User Signup!').should('be.visible')
    cy.get('[data-qa="signup-name"]').type('teste')
    cy.get('[data-qa="signup-email"]').type('testandocypress@email.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('p', 'Email Address already exist!').should('be.visible')
  })
})