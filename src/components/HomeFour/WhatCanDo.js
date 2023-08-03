import React from "react";
import Icone3 from "../../assets/images/icones/cadeado.png";
import Icone2 from "../../assets/images/icones/cartao-de-credito.png";
import Icone1 from "../../assets/images/icones/monitorar-tablet-e-smartohone.png";
import Icone4 from "../../assets/images/icones/renda.png";

export default function WhatCanDo() {
  return (
    <section className="services-section pt-120 rpt-100 pb-90 rpb-70">
      <div className="container">
       <div className="h3p">Vantagens</div>
        <div className="row">
          <div className="col-xl-3 col-sm-6">
            <div className="service-box wow fadeInUp delay-0-2s">
              <div className="service-normal">
                <div className="icon">
                  <img src={Icone1} alt="Icon" className="mb-25"/>
                </div>
                <h6>Controle de Gastos</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
                <a className="btn-circle" href="/service-details">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
              <div className="service-hover bg-blue text-white">
                <h3>Preparing For Your Business Success With IT Solution</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisc</p>
                <a href="/service-details" className="theme-btn">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="service-box wow fadeInUp delay-0-4s">
              <div className="service-normal">
                <div className="icon">
                <img src={Icone2} alt="Icon" className="mb-25"/>
                </div>
                <h6>Crédito<br/>Pré-Aprovado</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
                <a className="btn-circle" href="/service-details">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
              <div className="service-hover bg-blue text-white">
                <h3>Preparing For Your Business Success With IT Solution</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisc</p>
                <a href="/service-details" className="theme-btn">
                Saiba Mais
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="service-box wow fadeInUp delay-0-6s">
              <div className="service-normal">
                <div className="icon">
                <img src={Icone3} alt="Icon" className="mb-25"/>
                </div>
                <h6>Seguro Contra Roubo</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
                <a className="btn-circle" href="/service-details">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
              <div className="service-hover bg-blue text-white">
                <h3>Preparing For Your Business Success With IT Solution</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisc</p>
                <a href="/service-details" className="theme-btn">
                Saiba Mais
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 ">
            <div className="service-box wow fadeInUp delay-0-8s">
              <div className="service-normal">
                <div className="icon">
                <img src={Icone4} alt="Icon" className="mb-25"/>
                </div>
                <h6>Benefícios para Servidores</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
                <a className="btn-circle" href="/service-details">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
              <div className="service-hover bg-blue text-white">
                <h3>Preparing For Your Business Success With IT Solution</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisc</p>
                <a href="/service-details" className="theme-btn">
                Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet' type='text/css'></link>