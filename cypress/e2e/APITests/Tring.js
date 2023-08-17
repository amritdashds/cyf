// API

/// <reference types="cypress"/>

it('APITest', () => 
{
    cy.clearAllCookies()
    cy.visit("https://www.rahulshettyacademy.com/")
    cy.intercept(
    {
      method: 'GET', url: 'https://www.rahulshettyacademy.com/api/course',
    },
    [] 
  ).as('getUsers'); 
  cy.get("//[id='product']").click()
  cy.wait('@getUsers').then(interception =>
     {
       expect(interception.response.body).to.deep.equal([]);
  });
  

});