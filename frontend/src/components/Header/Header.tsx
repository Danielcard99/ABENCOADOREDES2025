import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { GoFileMedia, GoHome, GoPerson, GoTools } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} alt="Logo do Abençoado Redes" className={styles.logo} />
      </a>

      <div className={styles.menu_icon} ref={menuIconRef} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav
        ref={navRef}
        className={`${styles.nav} ${menuOpen ? styles.active : ""}`}
      >
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active_link : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              <GoHome className={styles.icon} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active_link : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              <GoPerson className={styles.icon} />
              Quem Somos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? styles.active_link : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              <GoTools className={styles.icon} />
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? styles.active_link : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              <GoFileMedia className={styles.icon} />
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active_link : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              <BsTelephone className={styles.icon} />
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
