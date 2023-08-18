describe('Practice session', () => {
    it('should start practice', () => {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
     
      const RadioButtonExample = 'radio2';
  
      cy.get(`input[type="radio"][value="${RadioButtonExample}"]`).check();  
      cy.get(`input[type="radio"][value="${RadioButtonExample}"]`).should('be.checked');

      cy.get(`input[type="radio"][value="${'dropdown-class-example'}"]`).check();

    //   cy.get('option1').check();

    //   cy.get('select').select('option3').should('have.option3,option2');
    });
  });