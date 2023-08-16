/// <reference types="cypress" />

import Loginpage from "/Adxautomation/cypress/PageObject/Loginpage.js"

describe('POM Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://staging-advisor.estgro.24livehost.com//');
   })
       it('Verify Login successful', () => {
      const Loginpage = new Loginpage
      Loginpage.enteremail('mkl.adv@yopmail.com');
      Loginpage.enterPassword('Dots@123');
      Loginpage.submit();
    })
   
    it('Verify Login unsuccessful for invalid username/password', () => {
        const Loginpage = new Loginpage
        Loginpage.enteremail('mkl.adv@yopmail.com');
        Loginpage.enterPassword('Dots@123');
        Loginpage.submit();
    })
   })class