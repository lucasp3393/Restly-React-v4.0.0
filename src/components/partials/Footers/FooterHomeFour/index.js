import React from "react";
import logo from "../../../../assets/images/logos/logo-footer.png";

export default function index() {
  return (
    <footer className="main-footer footer-three bg-light-black text-white pt-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="footer-widget about-widget">
              
              {/* <div className="text">
              Além de auxiliar na preservação dos dados, inclusive, todos os ambientes utilizados pela Seer Card possuem criptografia de ponta a ponta.
              </div> */}
            </div>
          </div>
          {/* <div className="col-sm-4 col-md-4">
            <div className="footer-widget link-widget ml-20 rml-0">
              <h4 className="footer-title">Page Links</h4>
              <ul className="list-style-three">
                <li>
                  <a href="#">Início</a>
                </li>
                <li>
                  <a href="#">Benefícios</a>
                </li>
                <li>
                  <a href="#">Seguros</a>
                </li>
                <li>
                  <a href="#">Quem Somos</a>
                </li>
                <li>
                  <a href="#">contato</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="footer-widget contact-widget mr-30 rmr-0">
              <h4 className="footer-title">Contato</h4>
              <ul className="list-style-two">
                <li>
                  <i className="fas fa-map-marker-alt"></i> Salvador-BA
                </li>
                <li>
                  <i className="fas fa-clock"></i> Seg-Sex 9:00 - 18:00
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href="callto:+012-345-6789">71 9 8888-0000</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@example.com">atendimento@seercard.com.br</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className="copyright-area bg-blue mt-30">
        <div className="container">
          <div className="copyright-inner pt-15">
          <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
            {/* <div className="social-style-one mb-10">
              <a href="http://facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="http://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.pinterest.com/">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div> */}
            <p>copyright 2023 Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
