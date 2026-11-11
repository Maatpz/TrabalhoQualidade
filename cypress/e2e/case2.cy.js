
describe('Teste de case 2', () => {
    it( '',() => {
        cy.visit('http://automationexercise.com');
        cy.get('body').should('be.visible');
        cy.contains('a', 'Signup / Login').click();
        cy.contains('h2', 'Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type('usuario5@teste.com');
        cy.get('[data-qa="login-password"]').type('123456');
        cy.get('[data-qa="login-button"]').click();
        cy.contains('a','Logged in as').should('be.visible');
        cy.contains('a', 'Delete Account').click();
        cy.contains('b', 'Account Deleted!').should('be.visible');
    });
});
