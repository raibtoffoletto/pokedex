import { themeFixtures } from '../fixtures';

describe('E2E Journey', () => {
  it('Can toggle between light and Dark theme', () => {
    cy.visitPokedex();

    cy.verifyTheme(themeFixtures.lightColor, themeFixtures.lightBGColor);

    cy.findByLabelText(themeFixtures.toggleLabel).click().should('be.checked');

    cy.verifyTheme(themeFixtures.darkColor, themeFixtures.darkBGColor);

    cy.findByLabelText(themeFixtures.toggleLabel)
      .click()
      .should('not.be.checked');

    cy.verifyTheme(themeFixtures.lightColor, themeFixtures.lightBGColor);
  });
});
