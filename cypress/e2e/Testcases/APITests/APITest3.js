describe('API Tests', () => {
  it('should return a 404 status code for a not found request', () => {
    cy.request({
      method: 'GET',
      url: 'https://rahulshettyacademy.com/AutomationPdfsgtsrice/'
    }).then(response => {
      expect(response.status).to.equal(200);
      });
  });
});