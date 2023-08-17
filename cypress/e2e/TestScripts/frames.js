import 'cypress-iframe';
/// <reference types="cypress"/>
/// <reference types ="cypress-iframe"/>

describe("Handling Frames", () => 
{
  // it('NewApp', () => 
  // {
  //       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  //       const iframe = cy.get("#courses-iframe")
  //       .its('0.contentDocument.body')
  //       .should('be.visible')
  //     .then(cy.wrap);

  //     iframe.clear().type("Welcome");
  // })
  
 
  it('NewApp2', () => 
  {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // const iframe = cy.get("#courses-iframe")
        cy.frameloaded("#courses-iframe")
        cy.iframe().find("//a[@class='btn btn-theme btn-sm btn-min-block']").eq(0).click()
        
  })
  }) 
