import Loginpage from "../../PageObject/Loginpage"
import Portalset from "../../PageObject/Portalset";

describe("Estgro Login", () => 
{
  it('', () => 
  {
    const Landing = new Loginpage
    const portal = new Portalset
    
    Landing.enterurl();
    Landing.enterEmail();
    Landing.enterPassword();
    Landing.submit();

    // portal.ClickEmail()
    // portal.
    // portal.submit()
    Landing.logout()
  });

 
  });
