import React from "react";
import aboutCircleDots from "../../assets/images/about/about-circle-dots.png";
import aboutThumbTwo from "../../assets/images/about/about-four-2.png";
import aboutThumb from "../../assets/images/about/about-four.png";
import logoCircle from "../../assets/images/logos/logo-circle.png";

export default function AboutSection() {
  return (
    <section className="about-section style-four py-120 rpy-100">
      <div className="container pb-120 rpb-95">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content pr-90 rpr-0 rmb-55 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-35">
                <span className="sub-title">Ficou Sabendo?</span>
                <h2>
                O cartão <span style={{color:"#104cba", fontWeight:"500"}}>Seer Card</span> possibilita aquisição de bens e serviços, através de uma ampla rede credenciada.
                </h2>
              </div>
              <p>
              Permite também uma antecipação salarial para os colaboradores de empresas privadas ou mistas e servidores públicos, através de um cartão e/ou App com as melhores condiçes de mercado.
Basta clicar e um atendente falar com você agora mesmo.
              </p>
              <i>
              Tudo em um só lugar! Particidade na palma da sua mão, para você usar quando e onde quiser
              </i>
              <a href="/about-one" className="theme-btn1 mt-25">
              Cadastrar
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-four-images text-center wow fadeInRight delay-0-2s">
              <div className="row">
                <div className="col-6">
                  <img src={aboutThumb} alt="About" />
                  <img
                    className="about-bg-circle d-block mx-auto"
                    src={aboutCircleDots}
                    alt="About"
                  />
                </div>
                <div className="col-6">
                  <img
                    className="bg-circle-dtos mb-35 d-block mx-auto"
                    src={logoCircle}
                    alt="Logo"
                  />
                  <img src={aboutThumbTwo} alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
