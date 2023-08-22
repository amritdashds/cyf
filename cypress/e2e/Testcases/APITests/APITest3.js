/// <reference types="cypress"/>

it('APITest', () => {
  cy.visit("https://www.rahulshettyacademy.com/");
  
  // Intercept the API call
  cy.intercept({
    method: 'GET',
    url: 'https://www.rahulshettyacademy.com/api/course',
  }).as('userdetail');

  // Wait for the interception and perform assertions
  cy.wait('@userdetail').then(interception => {
    // Check the response status code
    expect(interception.response.statusCode).to.equal(200);

    // Check the response body or any specific properties you want to assert
    expect(interception.response.body).to.have.property('key', 'value'); // Replace with your expected properties
  });
});
