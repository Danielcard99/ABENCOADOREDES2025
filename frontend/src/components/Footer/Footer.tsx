import React from "react";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h3>Abençoado Redes</h3>
          <p>
            Desde 2021, protegendo o que mais importa com segurança, qualidade e
            confiança em cada instalação.
          </p>
        </div>

        <div className={styles.contact}>
          <h4>Contato</h4>
          <p>
            <IoPhonePortrait className={styles.contact_icon} /> (71) 99906-2883
          </p>
          <p>
            <MdEmail className={styles.contact_icon} /> abencoadoredes@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt className={styles.contact_icon} /> Salvador - BA
          </p>
        </div>

        <div className={styles.social}>
          <h4>Social</h4>
          <div className={styles.icons}>
            <a
              href="https://www.instagram.com/abencoadoredesdeprotecao/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className={styles.icon} />
            </a>
            <a
              href="https://wa.me/5571999062883"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p>
          © {new Date().getFullYear()} Abençoado Redes. Todos os direitos
          reservados.
        </p>

        <p className={styles.dev}>
          Desenvolvido por{" "}
          <a
            href="https://github.com/Danielcard99"
            target="_blank"
            rel="noreferrer"
          >
            Daniel Cardoso
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
