import type React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  className?: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ title, to, className }) => {
  return (
    <Link to={to} className={`${styles.banner_button} ${className || ""}`}>
      {title}
    </Link>
  );
};

export default Button;
