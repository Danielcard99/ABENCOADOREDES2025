import React from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.contact_wrapper}>
          <h2>Fale Conosco</h2>
          <p>
            Entre em contato para solicitar um orçamento, tirar dúvidas ou
            agendar uma visita. Estamos prontos para atender você com agilidade
            e atenção.
          </p>
        </div>

        <div className={styles.container}>
          <ContactForm className={styles.contact_custom} />

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <FaWhatsapp className={styles.icon} />
              <p>(71) 99906-2883</p>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <p>abencoadoredes@gmail.com</p>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <p>Salvador, Bahia</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
