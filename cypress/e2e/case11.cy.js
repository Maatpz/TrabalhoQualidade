describe('Teste 11: verificar inscrição na página do carrinho', () => {
  it('inscrição na página de carrinho', () => {
    cy.visit('http://automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('a', 'Cart').click()
    cy.get('footer').scrollIntoView()
    cy.contains('h2', 'Subscription').should('be.visible')
    cy.get('#susbscribe_email').type('testandocypress@email.com')
    cy.get('#subscribe').click()
    cy.contains('You have been successfully subscribed!').should('be.visible')
  })
})