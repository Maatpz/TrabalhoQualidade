
describe('teste 6', () => {
    it('enviar o formulário de contato', () => {
        cy.visit('http://automationexercise.com');
        cy.get('body').should('be.visible')
        cy.contains('a', 'Contact us').click();
        cy.contains('h2', 'Get In Touch').should('be.visible');
        cy.get('[data-qa="name"]').type('teste');
        cy.get('[data-qa="email"]').type('teste@email.com');
        cy.get('[data-qa="subject"]').type('Teste Cypres');
        cy.get('[data-qa="message"]').type('Mensagem teste');
        cy.get('[name="upload_file"]').selectFile('cypress/fixtures/1.txt');
        cy.get('[data-qa="submit-button"]').click();
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
        cy.contains('span', 'Home').click();
        cy.get('body').should('be.visible')

    });

});