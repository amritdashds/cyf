
import neatCsv from 'neat-csv';

describe('CSV File Download Test', () => {
  it
  ('should download and parse a CSV file', () => 
  {
    // Intercept the download request and prevent it from actually downloading
    cy.intercept('GET', '/your-csv-file-url', {}).as('csvDownload');

    // Visit the page with the download link/button
    cy.visit('https://sample-videos.com/download-sample-csv.php');

    // Click the download link or button that triggers the download
    //  cy.get("//a[@class='download_csv'][@data='2']").click();
     cy.get("[href='csv/Sample-Spreadsheet-100-rows.csv']").click();

    // Wait for the download request to complete
    // cy.wait('@csvDownload', { timeout: 10000 }); // Adjust the timeout as needed

    // Read and parse the downloaded CSV file
    cy.readFile('cypress/downloads/your-csv-file.csv')
    .then(fileContent => {
      // Parse the CSV content using neat-csv
      neatCsv(fileContent).then(parsedData => {
        // `parsedData` now contains an array of JavaScript objects
        // representing the CSV rows
        cy.log(parsedData); // Display the parsed data in the Cypress log
      });
    });
  });
});
