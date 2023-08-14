
describe("Estgro Login", () => {
  it("should log in to the Estgro website", () => {
    cy.visit("https://staging-advisor.estgro.24livehost.com/");
    cy.wait(3000);
    cy.get("a[href='account/login']").click();
   
    cy.get("input.form-control.form-control-icon.valid").eq(0).type("lmj.adv@yopmail.com");
    cy.get("input.form-control.form-control-icon.form-control-password.valid").type("Dots@123");
    cy.get("button.btn-custom.btn-md.w-100.dbtn-custom").click();
    
  });
});