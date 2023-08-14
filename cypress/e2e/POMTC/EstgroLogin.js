import Loginpage from "../../PageObject/Loginpage"
import Portalset from "../../PageObject/Portalset.js"

describe("Estgro Login", () => 
{
  it('', () => 
  {
    const Landing = new Loginpage
    Landing.enterurl();
    Landing.enterEmail();
    Landing.enterPassword();
    Landing.submit();
    Landing.logout();
  });
})