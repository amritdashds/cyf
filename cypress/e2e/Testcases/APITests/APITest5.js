describe('API Tests', () => {
  before(() => {
    cy.log('Setup started');
  });

  it('GET Request', () => {
    cy.request('https://reqres.in/api/users/2')
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log('The Status Code Is = ' + response.status);
      });
  });

  after(() => {
    cy.log('Teardown started');
  });
});
