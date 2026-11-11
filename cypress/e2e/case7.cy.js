
describe('Teste 7', () => {
    it('acessar pagina Test Cases com sucesso', () => {
        cy.visit('http://automationexercise.com');
        cy.get('body').should('be.visible');
        cy.contains('a', 'Test Cases').click();
        cy.url().should('include', '/test_cases');
        // cy.contains('b', 'Test Cases').should('be.visible');
    });
});
