/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe('/pages/index', () => {
  it('fill the form fields and send successfully', () => {
    cy.visit('/');

    cy.get('footer button').click();

    cy.get('form input[name="nome"]').type('Leandro Ritter');
    cy.get('form input[name="email"]').type('r1tt3r@gmail.com');
    cy.get('form textarea[name="msg"]').type('Test message');

    cy.get('form button').click();
    cy.wait(3000);

    cy.get('#notification').should(
      'have.text',
      'Obrigado por entrar em contato, em breve retorno seu contato.'
    );
  });
});
