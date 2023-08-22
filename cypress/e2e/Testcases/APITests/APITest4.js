describe('API Tests', () => {
  it('should return a 200 status code for a successful request', () => {
    cy.request('GET', 'https://rahulshettyacademy.com/AutomationPractice/')
      .should((response) => {
        expect(response.status).to.equal(200);
      });
  });

  it('should return a 404 status code for a not found request', () => {
    cy.request('GET', 'https://rahulshettyacademy.com/NonExistentEndpoint')
      .should((response) => {
        expect(response.status).to.equal(404);
      });
  });
});