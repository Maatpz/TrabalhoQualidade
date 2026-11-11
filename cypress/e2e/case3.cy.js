
describe('Teste 3 ', () => {
    it('', () => {
        cy.visit('http://automationexercise.com');
        cy.get('body').should('be.visible');
        cy.contains('a', 'Signup / Login').click();
        cy.contains('h2', 'Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('zumerro@gha.com');
        cy.get('[data-qa="login-password"]').type('senha123');
        cy.get('[data-qa="login-button"]').click();
        cy.contains('p','Your email or password is incorrect!').should('be.visible');
    });
});
