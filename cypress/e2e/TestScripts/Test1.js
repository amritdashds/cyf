/// <reference types="cypress"/>
it('GoogleHomepage', () => 
{
    cy.clearAllCookies()
    cy.visit("https://www.google.com")
    // cy.get('#APjFqb').type('Software testing{Enter}')

    // Timeout
    // cy.get('#APdfbbfjFqb', {timeout:5000}).type('Software testing{Enter}')
    
    cy.visit("https://www.google.com")
    cy.get('#APjFqb').type('Software testing lifecycle')
    cy.contains('Google Search').click()

});