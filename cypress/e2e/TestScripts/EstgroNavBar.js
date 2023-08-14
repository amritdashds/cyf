describe('EstgroNavBarTouch', () => {
    it('should navigate through the Estgro web application', () => {
      cy.visit('https://staging-advisor.estgro.24livehost.com/')
            
      cy.get('a[href="account/login"]').click()        

      cy.get('input[class="form-control form-control-icon valid"]').type('mkl.adv@yopmail.com')      
      cy.get('input[class="form-control form-control-icon form-control-password  valid"]').type('Dots@123')
      cy.get('button[class="btn-custom btn-md w-100 dbtn-custom"]').click()  

      cy.get('a[href="/portal-settings"]').click()
      cy.contains('Configure Email Template').click(); 
      cy.get('img[src="assets/images/back-arrow.svg"]').click();
   
      cy.get(':nth-child(2) > .card-item > .portal-settings-info > a > span').click();
      
      cy.get('.rounded-icon > img').click();
      
      cy.get('a[href="/manage-users/internal-users"]').click()  
               
      // cy.get('a[href="/documents"]').click()
      // cy.get(':nth-child(4) > .active > span').click()    
            
      cy.get('a[href="/email-history"]').click()   
           
      cy.get('a[href="/clients"]').click()    
          
      cy.get('a[href="/payment-history"]').click()  
              
      cy.get('a[href="/helpandsupport"]').click()      
    

      cy.get('.main-sidebar.main-sidebar-new.d-flex.flex-column').scrollTo('bottom')            
      cy.get('a[href="/account/my-account"]').click()           
      cy.get('a[href="/manage-business-account"]').click()      

      cy.get('.main-sidebar.main-sidebar-new.d-flex.flex-column').scrollTo('top', { duration: 500 });
      cy.get('a[href="/Identity/Account/Logout"]').click();
    
    })
  })  