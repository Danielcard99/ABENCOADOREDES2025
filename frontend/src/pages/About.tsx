import React from "react";
import Banner from "../components/Banner/Banner";
import bannerImage from "../assets/images/banner4.jpeg";
import materialImage from "../assets/images/varanda.jpeg";
import styles from "./About.module.css";
import Cards from "../components/Cards/Cards";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa6";
import Cta from "../components/Cta/Cta";
import abntImage from "../assets/abnt.png";
import equiplexImage from "../assets/equiplex.png";
import falcaoImage from "../assets/falcao.png";
import inmetroImage from "../assets/inmetro.png";
import isoImage from "../assets/iso.png";

const About: React.FC = () => {
  return (
    <>
      <Banner
        title="Quem Somos"
        subtitle="Segurança, qualidade e confiança em cada instalação"
        image={bannerImage}
      />

      <section className={styles.history}>
        <div className={styles.container}>
          <h2>Nossa História</h2>

          <p>
            A <strong>Abençoado Redes</strong> é uma empresa especializada em
            instalação de redes de proteção, comprometida em oferecer{" "}
            <strong>segurança</strong>, <strong>confiança</strong> e
            tranquilidade para famílias, condomínios e empresas.
          </p>

          <p>
            Fundada em <strong>2021</strong>, a empresa nasceu com o propósito
            de proteger o que realmente importa — a vida das pessoas e dos seus
            pets — por meio de soluções <strong>seguras</strong>,{" "}
            <strong>duráveis</strong> e{" "}
            <strong>esteticamente harmoniosas</strong>.
          </p>

          <p>
            Desde o início, buscamos unir <strong>tecnologia</strong>,{" "}
            <strong>experiência</strong> e <strong>responsabilidade</strong> em
            cada projeto. Nossas redes são produzidas com materiais{" "}
            <strong>100% virgens</strong> e certificados, garantindo resistência
            à tração, ao sol e à chuva, além de um acabamento{" "}
            <strong>impecável</strong> que se adapta perfeitamente ao estilo
            arquitetônico de cada ambiente.
          </p>

          <p>
            Cada instalação é realizada por profissionais <em>qualificados</em>,
            que atuam com atenção aos detalhes e total respeito ao cliente.
            Nosso objetivo não é apenas instalar uma rede, mas entregar{" "}
            <strong>paz de espírito</strong>, sabendo que cada espaço protegido
            representa mais <strong>segurança</strong> e{" "}
            <strong>liberdade</strong> para quem vive ali.
          </p>

          <p>
            Acreditamos que a confiança se constrói com{" "}
            <strong>transparência</strong> e <strong>compromisso</strong>. Por
            isso, acompanhamos cada etapa do serviço, desde o primeiro contato
            até o pós-instalação, garantindo que o cliente se sinta{" "}
            <strong>seguro</strong> e <strong>satisfeito</strong> com o
            resultado final.
          </p>

          <p>
            Com uma trajetória marcada pela <strong>dedicação</strong> e pelo{" "}
            <strong>atendimento humanizado</strong>, a{" "}
            <strong>Abençoado Redes</strong> se orgulha de já ter conquistado a
            confiança de diversas famílias e empresas. Nosso trabalho é mais do
            que uma prestação de serviço — é um compromisso com a{" "}
            <strong>proteção</strong>, o <strong>bem-estar</strong> e a{" "}
            <strong>qualidade de vida</strong> de cada cliente.
          </p>

          <span>
            <em>
              Abençoado Redes — protegendo o que você ama, com{" "}
              <strong>segurança</strong> e <strong>excelência</strong>.
            </em>
          </span>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaBullseye className={styles.icon} />
            <h3>Missão</h3>
            <p>
              Proporcionar segurança e tranquilidade com redes de alta
              qualidade.
            </p>
          </div>
          <div className={styles.card}>
            <FaEye className={styles.icon} />
            <h3>Visão</h3>
            <p>
              Ser referência em redes de proteção pela excelência e confiança.
            </p>
          </div>
          <div className={styles.card}>
            <FaGem className={styles.icon} />
            <h3>Valores</h3>
            <p>
              Ética, responsabilidade, transparência e compromisso com o
              cliente.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.materials}>
        <div className={styles.container}>
          <div className={styles.materials_content}>
            <h2>Nossos Materiais</h2>
            <p>
              Utilizamos redes de proteção em{" "}
              <strong>polietileno 100% virgem</strong>, de{" "}
              <strong>alta densidade</strong> e com{" "}
              <strong>tratamento anti-UV</strong>, garantindo durabilidade,
              resistência e segurança em qualquer ambiente.
            </p>
            <p>
              Cada material passa por{" "}
              <strong>testes de tração e certificação</strong> conforme as
              normas da ABNT, assegurando qualidade e confiança em todas as
              instalações.
            </p>

            <ul className={styles.specs}>
              <li>
                <strong>Material:</strong> Polietileno virgem (HDPE)
              </li>
              <li>
                <strong>Resistência:</strong> até 250 kg/m²
              </li>
              <li>
                <strong>Proteção:</strong> Tratamento contra raios UV
              </li>
              <li>
                <strong>Durabilidade:</strong> Superior a 5 anos
              </li>
              <li>
                <strong>Certificação:</strong> NBR 16046 / ABNT
              </li>
            </ul>
          </div>

          <div className={styles.image_wrapper}>
            <img src={materialImage} alt="Rede de proteção de alta qualidade" />
          </div>
        </div>

        <div className={styles.certifications}>
          <img src={abntImage} alt="Certificado ABNT" />
          <img src={equiplexImage} alt="Certificado Equiplex" />
          <img src={falcaoImage} alt="Certificado Falcão Bauer" />
          <img src={inmetroImage} alt="Certificado INMETRO" />
          <img src={isoImage} alt="Certificado INMETRO" />
        </div>
      </section>

      <Cards carousel />

      <Cta
        title="Pronto para proteger o que mais importa?"
        paragraph=" Redes de proteção instaladas com qualidade, segurança e compromisso.
            Solicite seu orçamento sem compromisso e garanta tranquilidade hoje
            mesmo."
      />
    </>
  );
};

export default About;
