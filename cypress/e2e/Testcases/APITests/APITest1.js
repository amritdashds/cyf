/// <reference types="cypress" />

describe("HTTP Requests", () => {
  it("Get Call", () => {
        cy.request({
          method: 'GET',
          url: 'https://rahulshettyacademy.com/AutomationPractice/' // Replace with your API endpoint URL
        }).then(response => {
          expect(response.status).to.equal(200);
      });
  });
})