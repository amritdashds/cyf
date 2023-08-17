/// <reference types="cypress"/>

it('APITest', () => 
{
    cy.visit("https://www.rahulshettyacademy.com/")
    cy.intercept(
      {
      method: 'GET', url: 'https://www.rahulshettyacademy.com/api/course',
    } 
  )
  .as('userdetail'); 
    cy.wait('@userdetail').then(interception =>
     {
       expect(interception.response.body).to.deep.equal([]);
  });
  

});