/// <reference types="cypress" />

describe("HTTP Requests", () => {
  it("Get Call", () => {
    cy.request('GET', 'https://rahulshettyacademy.com/AutomationPractice/')
         .then((response) => 
         {
        expect(response.status).to.equal(200);
      });
  });
})