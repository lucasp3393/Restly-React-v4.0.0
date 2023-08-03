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
      <header className="main-header header-four">
        <div className="header-upper text-white">
          <div className="container clearfix">
         
            <div className="header-inner d-flex align-items-center">
              <div className="logo-outer">
               
              </div>
              <div className="nav-outer clearfix d-flex align-items-center">
                <div className="main-menu navbar-expand-lg mx-lg-auto">
        
                  {/* <Navigation /> */}
                </div>
                {/* The Search functionality is removed */}
                {/* <div className="menu-btn">
                  <a href="/contact" className="theme-btn2">
                    Área do Usuário
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
