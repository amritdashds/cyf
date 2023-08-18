/// <reference types="cypress"/>

import csv from 'neat-csv'

describe("File Test", () => 
{
    let data;
    before(() =>{

        cy.fixture("user.csv")
        .then(neatCSV)
        .then(response => data=response)

    })
})
