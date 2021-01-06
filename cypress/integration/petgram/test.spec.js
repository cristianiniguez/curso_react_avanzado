/* eslint-disable */

describe('Petgram', () => {
  it('para ver si la app funciona', () => {
    cy.visit('/');
  });

  it('navegamos a una categoría y vemos fotos', () => {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('si podemos navegar con la navbar a la home', () => {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });

  it('los usuarios no registrdos ven el formulario de registro e inicio de sesión al ir a favs', () => {
    cy.visit('/favs');
    cy.get('form').should('have.length', 2);
  });
});
