import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingDollar, faMobileScreenButton, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import aboutTab from "../../assets/images/about/about-tab.png";
import aboutTabTwo from "../../assets/images/about/about.png";
import background from "../../assets/images/counter/counter-bg.jpg";
import CounterUp from "../helpers/CounterUp";
import DataIteration from "../helpers/DataIteration";

export default function AboutTabSection() {
  const tabContent = [
    {
      id: 1,
      uniqKey: "_data_center",
      content: "Seer Card e Você",
      icon: faCreditCard,
      thumb: aboutTab,
      title: "Sobre a Seer Card",
      subTitle: "Nosso Compromisso",
      text: "A Seer Card é uma empresa de Gestão de Convênios e Benefícios, levando soluções para órgãos públicos e empresas privadas. Oferece aos seus funcionários a facilidade de compras em uma ampla rede credenciada, além de outros benefícios em saúde e odontologia, fomentando a economia local do município.",
    },
    {
      id: 2,
      uniqKey: "_cloud_service",
      content: "Acesse o App",
      icon: faMobileScreenButton,
      thumb: aboutTabTwo,
      title: "Acesse o App",
      subTitle: "Sobre o App",
      text:"Acesse de maneira rápida e fácil os seus serviços a qualquer hora do dia e qualquer dia da semana. Consulte saldos e extratos sem pagar taxas e sem sair de casa.",
    },
    {
      id: 3,
      uniqKey: "_web_dev",
      content: "Redes Conveniadas",
      icon: faShop,
      thumb: aboutTab,
      title: "Redes Conveniadas",
      subTitle: "Lojistas e Parceiros",
      text:"Consulte diversos estabelecimentos com apenas um clique. Há varias opções de lojas credenciadas pela Seer Card cada vez mais perto de você para lhe atender melhor.",
    },
    {
      id: 4,
      uniqKey: "_it_managment",
      content: "Vantagens de Seer",
      icon: faHandHoldingDollar,
      thumb: aboutTabTwo,
      title: "Pensado em você",
      subTitle: "Vantagens e Beneficios",
      text:"Cartão com crédito pré-aprovado, Segurança contra roubo, controle de gastos 100% online, ampla rede credenciada.",
    },
  ];
  const [tab, setTab] = useState(tabContent[0].id);
  const tabHandler = (e, value) => {
    e.preventDefault();
    setTab(value);
  };
  return (
    <section
      id="about-tab-section"
      className="about-tab-section bg-light-black text-white pb-120 rpb-100"
    >
      <div className="container">
        <div
          className="fact-counter-inner br-5 px-25 pt-80 pb-30 text-white text-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-2s">
                <span className="count-text">
                  <CounterUp endValue="520" sectionSelect="about-tab-section" />
                </span>
                <p>Redes Conveniadas</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-4s">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="24"
                >
                  <CounterUp endValue={24} sectionSelect="about-tab-section" />
                </span>
                <p>Nossos Parceiros</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-6s">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="12"
                >
                  <CounterUp endValue={12} sectionSelect="about-tab-section" />
                </span>
                <p>Cidades Presentes</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="success-item wow fadeInUp delay-0-8s">
                <span
                  className="count-text plus"
                  data-speed="5000"
                  data-stop="352"
                >
                  <CounterUp endValue={352} sectionSelect="about-tab-section" />
                </span>
                <p>Clientes Cadastrados</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-title text-center mb-55">
          <span className="sub-title">Sobre</span>
          <h2>
          Vantagens e Benefícios
          </h2>
        </div>
        <ul className="nav about-tab">
          <DataIteration datas={tabContent} startLength={0} endLength={4}>
            {({ datas }) => (
              <li key={datas.id + datas.uniqKey}>
                <a
                  onClick={(e) => tabHandler(e, datas.id)}
                  className={tab === datas.id ? "active" : ""}
                  data-toggle="tab"
                  href="#"
                >
        <FontAwesomeIcon icon={datas.icon} style={{margin: 10, fontSize: 35}} />
                  {/* <i className={datas.icon}></i> */}
                  <h3>{datas.content}</h3>
                </a>
              </li>
            )}
          </DataIteration>
        </ul>
        <div className="tab-content about-tab-content">
          <DataIteration datas={tabContent} startLength={0} endLength={4}>
            {({ datas }) => (
              <div
                key={datas.id + datas.uniqKey}
                className={`tab-pane fade ${
                  tab === datas.id ? "show active" : ""
                }`}
                id="tabContent1"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="about-image-shape rmb-70 wow fadeInLeft delay-0-2s">
                      <img src={datas.thumb} alt="About" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-content pr-70 rpr-0 wow fadeInRight delay-0-2s">
                      <div className="section-title mb-35">
                        <span className="sub-title">
                          {datas.subTitle}
                        </span>
                        <h2>
                          {datas.title}
                        </h2>
                      </div>
                      <p>
                    {datas.text}
                      </p>
                      <ul className="list-style-one mt-15">
                        <li>Redes Conveniadas</li>
                        <li>+ Praticidade</li>
                        <li>100% Digital</li>
                        <li>+ Segurança</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </section>
  );
}
