import type React from "react";
import styles from "./Banner.module.css";

interface BannerProps {
  title: string;
  subtitle?: string;
  image: string;
  className?: string;
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  image,
  className,
  children,
}) => {
  return (
    <div
      className={`${styles.banner} ${className || ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.background}>
        <div className={styles.container}>
          <h1 className={styles.banner_title}>{title}</h1>
          <p className={styles.banner_subtitle}>{subtitle}</p>
          {children && <div className={styles.banner_content}>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
