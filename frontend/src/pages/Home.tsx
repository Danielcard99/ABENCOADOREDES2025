import React from "react";
import styles from "./Home.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import Banner from "../components/Banner/Banner";
import serviceImage from "../assets/images/banner3.jpeg";
import Button from "../components/Button/Button";
import myVideo from "../assets/images/WhatsApp Video 2025-10-02 at 15.37.50.mp4";

import qualityIcon from "../assets/icons/quality-certificate-award-svgrepo-com.svg";
import shieldIcon from "../assets/icons/shield-user-svgrepo-com.svg";
import buildingIcon from "../assets/icons/building-svgrepo-com.svg";
import moneyIcon from "../assets/icons/money-svgrepo-com.svg";
import rulerIcon from "../assets/icons/ruler-pen-svgrepo-com.svg";
import fastIcon from "../assets/icons/fast-quick-stopwatch-svgrepo-com.svg";

const Home: React.FC = () => {
  return (
    <>
      <section className={styles.video}>
        <video
          src={myVideo}
          autoPlay
          loop
          muted
          className={styles.video_player}
        ></video>
        <div className={styles.background}></div>
        <div className={styles.video_content}>
          <h2 className={styles.video_title}>
            Proteja quem você ama com segurança e qualidade
          </h2>
          <p className={styles.video_subtitle}>
            Instalação de redes de proteção em todos os ambientes
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.features_display}>
          <div className={styles.features_wrapper}>
            <img
              src={qualityIcon}
              alt="Qualidade"
              className={styles.features_icon}
            />
            <div className={styles.features_text}>
              <h2>Qualidade</h2>
              <p>
                Garantimos redes de proteção com materiais certificados e
                acabamento impecável, oferecendo durabilidade e segurança para
                sua família.
              </p>
            </div>
          </div>

          <div className={styles.features_wrapper}>
            <img
              src={shieldIcon}
              alt="Segurança"
              className={styles.features_icon}
            />
            <div className={styles.features_text}>
              <h2>Segurança</h2>
              <p>
                Cada rede é projetada para proteger pessoas, pets e objetos,
                garantindo total tranquilidade no seu lar.
              </p>
            </div>
          </div>

          <div className={styles.features_wrapper}>
            <img
              src={buildingIcon}
              alt="Instalação em Prédios"
              className={styles.features_icon}
            />
            <div className={styles.features_text}>
              <h2>Instalação em Prédios</h2>
              <p>
                Realizamos instalação rápida e profissional em apartamentos e
                condomínios, seguindo todas as normas de segurança.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.features_display}>
          <div className={styles.features_wrapper}>
            <img
              src={moneyIcon}
              alt="Economia"
              className={styles.features_icon}
            />
            <div className={styles.features_text}>
              <h2>Economia</h2>
              <p>
                Redes duráveis e de alta qualidade, com o melhor custo-benefício
                do mercado, que exigem pouca manutenção.
              </p>
            </div>
          </div>

          <div className={styles.features_wrapper}>
            <img
              src={rulerIcon}
              alt="Projetado"
              className={styles.features_icon}
            />
            <div className={styles.features_text}>
              <h2>Projetado</h2>
              <p>
                Nossas soluções são planejadas para cada ambiente, garantindo
                encaixe perfeito e máxima eficiência.
              </p>
            </div>
          </div>

          <div className={styles.features_wrapper}>
            <img
              src={fastIcon}
              alt="Eficiência"
              className={styles.features_icon}
            />
            <div className={styles.features_text}>
              <h2>Eficiência</h2>
              <p>
                Equipe treinada e materiais de primeira linha, garantindo
                instalações rápidas, seguras e confiáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Banner
        title="Nossos Serviços"
        subtitle="Oferecemos instalação de redes de proteção em piscinas,
                varandas, sacadas, janelas, quadras esportivas e grades.
                Trabalhamos com materiais de alta resistência e instalação
                profissional, garantindo segurança, estética e durabilidade.
                Cada projeto é planejado de forma personalizada, priorizando a
                proteção da sua família, pets e patrimônio."
        image={serviceImage}
        className={styles.banner_custom}
      >
        <Button title="Saiba mais" to="/services" />
      </Banner>

      <section className={styles.about}>
        <h2 className={styles.about_title}>Quem Somos</h2>
        <div className={styles.about_wrapper}>
          <p>
            Fundada em 2021, a Abençoado Redes surgiu com a missão de levar
            segurança, qualidade e tranquilidade para lares e empresas. Desde o
            início, buscamos oferecer soluções que unam tecnologia e
            experiência, utilizando apenas materiais certificados e duráveis,
            instalados por uma equipe altamente qualificada. Nosso foco vai além
            da instalação de redes de proteção: queremos proporcionar paz de
            espírito, garantindo que cada ambiente esteja seguro para crianças,
            pets e toda a família. Cada projeto é planejado com atenção aos
            detalhes e respeito ao estilo arquitetônico do local, sem
            comprometer a estética ou a funcionalidade. Acreditamos que
            confiança se constrói com transparência e comprometimento. Por isso,
            estamos sempre disponíveis para orientar nossos clientes, oferecer
            soluções personalizadas e acompanhar cada etapa do serviço,
            garantindo que o resultado final seja seguro, durável e impecável.
            Na Abençoado Redes, proteger o que você ama é nossa prioridade, e
            fazemos isso com responsabilidade, dedicação e excelência.
          </p>
          <Button title="Saiba mais" to="/about" className={styles.about_btn} />
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contact_wrapper}>
          <h2>Fale Conosco</h2>
          <p>
            Entre em contato para solicitar um orçamento, tirar dúvidas ou
            agendar uma visita. Estamos prontos para atender você com agilidade
            e atenção.
          </p>
        </div>

        <ContactForm />
      </section>
    </>
  );
};

export default Home;
