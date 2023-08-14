
describe('Google Test', () => {
    it('Should launch Chrome and redirect to Google', () => {
     
      cy.visit('https://www.google.com');
      cy.get('[name="q"]').type('Software Testing').type('{enter}');
      cy.contains('Wikipedia').click();
      cy.end();
    });
  });