/// <reference types="cypress"/>

import cypress from 'cypress';
import 'cypress-file-upload';

describe('File Download Scenario 1',() => 
{

    it.only('Single file download',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/download');
        cy.get("h3").should('have.text','File Downloader');    
        cy.get('[href="download/user.csv"]').click();
        // cy.readFile(Cypress.config("file folder"));    
    }
       )
}
)
