import React, { useEffect } from "react";
import logo2 from "../../../../assets/images/logos/logo.png";
import StickyMenu from "../../../../lib/StickyMenu";
import MobileHeaderCom from "../../Mobile/MobileHeaderCom";

export default function HeaderHomeFour() {
  useEffect(() => {
    StickyMenu(".main-header");
  });

  return (
    <>
    
     <header className="main-header header-four">
        <div className="header-upper">
          <div className="container clearfix">
          <MobileHeaderCom logo={logo2} />
           
          </div>
        </div>
      </header>
      
    </>
  );
}
