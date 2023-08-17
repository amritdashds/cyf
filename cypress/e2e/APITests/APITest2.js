/// <reference types="cypress" />

describe("HTTP Requests", () => {

  it("Get Call", () => {
    cy.request('GET', 'https://rahulshettyacademy.com/AutomationPractice/')
    .its('status')
    .should('equal',200)
});
});