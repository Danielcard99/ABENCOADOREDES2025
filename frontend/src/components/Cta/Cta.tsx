import type React from "react";
import styles from "./Cta.module.css";
import Button from "../Button/Button";

interface CtaProps {
  title: string;
  paragraph: string;
  className?: string;
}

const Cta: React.FC<CtaProps> = ({ title, paragraph, className }) => {
  return (
    <div className={`${styles.cta} ${className || ""}`}>
      <div className={styles.container}>
        <div className={styles.cta_wrapper}>
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <Button
            title="Fale Conosco"
            to="/contact"
            className={styles.cta_button}
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
