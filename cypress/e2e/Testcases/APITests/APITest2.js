/// <reference types="cypress" />

describe("HTTP Requests", () => {
  it("Get Call", () => {
    cy.request('GET', 'https://www.google.com')
      .its('status')
      .should('equal', 200);
  });
});
