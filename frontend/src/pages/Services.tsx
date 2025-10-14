import React from "react";
import bannerImage from "../assets/images/banner2.jpeg";
import styles from "./Services.module.css";
import Button from "../components/Button/Button";
import { FaHome, FaShieldAlt, FaSwimmingPool } from "react-icons/fa";
import {
  FaBath,
  FaBuilding,
  FaFutbol,
  FaMosquito,
  FaPaw,
  FaWarehouse,
  FaWindowMaximize,
} from "react-icons/fa6";
import Cards from "../components/Cards/Cards";
import Cta from "../components/Cta/Cta";

const customData = [
  {
    icon: <FaHome />,
    title: "Janelas e Varandas",
    desc: "Segurança e estética em janelas e varandas residenciais ou comerciais sempre.",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Piscinas",
    desc: "Proteção completa para piscinas, garantindo segurança e conforto da família.",
  },
  {
    icon: <FaPaw />,
    title: "Ambientes para Pets",
    desc: "Redes resistentes e discretas para proteger todos os animais de estimação.",
  },
  {
    icon: <FaFutbol />,
    title: "Quadras Esportivas",
    desc: "Redes reforçadas para quadras esportivas, resistentes a impactos e uso diário.",
  },
  {
    icon: <FaBuilding />,
    title: "Condomínios e Empresas",
    desc: "Soluções sob medida com alto padrão de qualidade e máxima segurança sempre.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Escadas e Fachadas",
    desc: "Instalação segura e discreta em escadas, fachadas e áreas externas sempre.",
  },
  {
    icon: <FaMosquito />,
    title: "Telas Mosquiteiras",
    desc: "Proteção contra insetos em janelas, portas e áreas externas de forma eficaz.",
  },
  {
    icon: <FaWarehouse />,
    title: "Coberturas e Fechamentos",
    desc: "Fechamentos de varandas e coberturas com segurança e ótimo acabamento final.",
  },
  {
    icon: <FaWindowMaximize />,
    title: "Vidros e Janelas Especiais",
    desc: "Instalação de janelas 4 folhas e portas de correr com trilho embutido sempre.",
  },
  {
    icon: <FaBath />,
    title: "Banheiros e Boxes",
    desc: "Proteção discreta e segura para banheiros, boxes e áreas molhadas sempre.",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>Nossos Serviços</h1>
            <p>
              Oferecemos instalação profissional de redes de proteção para
              janelas, varandas, piscinas, quadras esportivas, áreas comerciais
              e muito mais. Trabalhamos com materiais certificados, equipe
              especializada e acabamento impecável.
            </p>
            <Button title="Solicitar Orçamento" to="/contact" />
          </div>
          <img
            src={bannerImage}
            alt="Instalação de redes de proteção"
            className={styles.image}
          />
        </div>
      </section>

      <Cards
        data={customData}
        title="Onde Instalamos"
        subtitle="Conheça os principais ambientes onde atuamos com qualidade e segurança."
        carousel={true}
      />

      <section className={styles.process}>
        <h2>Como Trabalhamos</h2>
        <ol className={styles.steps}>
          <li>
            <strong>1. Orçamento e Avaliação</strong>
            <p>
              Você solicita um orçamento e analisamos o local para garantir a
              melhor solução.
            </p>
          </li>
          <li>
            <strong>2. Escolha dos Materiais</strong>
            <p>
              Utilizamos redes em polietileno virgem de alta densidade e
              resistência UV.
            </p>
          </li>
          <li>
            <strong>3. Instalação Profissional</strong>
            <p>
              Nossa equipe realiza a instalação com precisão e cuidado em cada
              detalhe.
            </p>
          </li>
          <li>
            <strong>4. Garantia e Suporte</strong>
            <p>Oferecemos garantia contra defeitos e suporte pós-instalação.</p>
          </li>
        </ol>
      </section>

      <Cta
        className={styles.cta_custom}
        title="Pronto para proteger o que mais importa?"
        paragraph="Redes de proteção instaladas com qualidade, segurança e compromisso. Solicite seu orçamento sem compromisso e garanta tranquilidade hoje mesmo."
      />
    </>
  );
};

export default Services;
