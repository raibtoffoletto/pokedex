/* eslint-disable-next-line */
declare namespace Cypress {
  interface Chainable {
    visitPokedex(): Chainable<Element>;
    verifyTheme(color: string, background: string): Chainable<Element>;
  }
}

Cypress.Commands.add('visitPokedex', () => {
  cy.visit('/');

  cy.log('wait for page to load');
  cy.get('[class*=MuiCircularProgress-root]').should('exist');

  cy.log('wait for pokemons to load');
  cy.get('[class*=MuiCircularProgress-root]').should('not.exist');
});

Cypress.Commands.add('verifyTheme', (color: string, background: string) => {
  cy.get('body')
    .should('have.css', 'color', color)
    .should('have.css', 'background-color', background);
});
