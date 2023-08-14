class Loginpage
{
enterurl() 
{
    cy.visit('https://staging-advisor.estgro.24livehost.com//');
    cy.wait(3000);
    cy.get("a[href='account/login']").click();
}
enterEmail(email) 
{
    cy.get("input.form-control.form-control-icon.valid").eq(0)
    .clear()
    .type("lmj.adv@yopmail.com")
    return this
}
enterPassword(password) 
{
    cy.get("input.form-control.form-control-icon.form-control-password.valid")
    .clear()
    .type("Dots@123")
    return this
}
submit()
{
    cy.get("button.btn-custom.btn-md.w-100.dbtn-custom").click();
}
logout()
{
    cy.get('.main-sidebar.main-sidebar-new.d-flex.flex-column').scrollTo('top', { duration: 500 });
    cy.get('a[href="/Identity/Account/Logout"]').click();
}

}
export default Loginpage;