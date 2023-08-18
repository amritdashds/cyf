/// <reference types="cypress"/>

import 'cypress-file-upload';

describe('File Upload Scenario 1',() => 
{

    it.only('Single file upload',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get("h3").should('have.text','File Uploader');
        cy.get('#file-upload').attachFile('user.csv')
        cy.get('#file-submit').click();               
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    }
       )
}
)