/// <reference types="cypress" />

describe("HTTP Requests", () => {
  it("Get Call", () => {
    cy.request({
      method: 'GET',
      url: 'https://aa.google.com/u/0/_/gog/get?rt=j&sourceid=538' // Complete URL here
    }).then(response => {
      expect(response.status).to.equal(200); // Check if the response status is 200
    });
  });
});