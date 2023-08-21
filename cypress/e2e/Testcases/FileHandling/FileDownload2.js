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
// const fs = require('fs');
// const path = require('path');
// const neatCsv = require('neat-csv');

// const filePath = path.join(__dirname, 'users.csv');
// fs.readFile(filePath, (error, data) => {
//   if (error) {
//     return console.log('error reading file');
//   }
//   neatCsv(data)
//     .then((parsedData) => console.log(parsedData));