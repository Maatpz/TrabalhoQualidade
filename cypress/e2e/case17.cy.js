describe('Teste 17: Remover produtos do carrinho', () => {
  it('Deve remover produtos do carrinho', () => {
    cy.visit('http://automationexercise.com')
    cy.get('body').should('be.visible')
    cy.contains('a', 'Products').click()
    cy.get('.product-image-wrapper').eq(0).find('a.add-to-cart').first().click()
    cy.contains('button', 'Continue Shopping').click()
    cy.contains('a', 'Cart').click()
    cy.url().should('include', '/view_cart')
    cy.get('#product-1').find('.cart_quantity_delete').click()
    cy.get('#product-1').should('not.exist')
  })
})