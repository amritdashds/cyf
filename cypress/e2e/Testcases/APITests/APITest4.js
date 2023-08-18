describe('API Tests', () => {
    it('should return a 200 status code for a successful request', () => {
      cy.request('GET', 'https://rahulshettyacademy.com/AutomationPractice/')
        .should((response) => {
          expect(response.status).to.equal(200);
        });
    });
  
    it('should return a 400 status code for a bad request', () => {
      cy.request('GET', 'https://rahulshettyacademy.com/AuionPractice')
        .should((response) => {
          expect(response.status).to.equal(404);
        });
    });
  });