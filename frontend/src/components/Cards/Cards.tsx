import { useEffect, useState, type JSX } from "react";
import Slider from "react-slick";
import {
  FaShieldAlt,
  FaUserTie,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
  FaChild,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdSupportAgent,
  MdOutlineHomeRepairService,
} from "react-icons/md";
import styles from "./Cards.module.css";

interface CardItem {
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface CardsProps {
  data?: CardItem[];
  title?: string;
  subtitle?: string;
  carousel?: boolean;
}

export default function Cards({
  data,
  title = "Nossos Diferenciais",
  subtitle = "Conheça o que faz a Abençoado Redes ser referência em segurança e qualidade.",
  carousel = false,
}: CardsProps) {
  const defaultData: CardItem[] = [
    {
      icon: <FaShieldAlt />,
      title: "Materiais de Alta Qualidade",
      desc: "Redes com certificação e alta resistência, garantindo durabilidade e segurança.",
    },
    {
      icon: <FaUserTie />,
      title: "Equipe Especializada",
      desc: "Profissionais qualificados, com experiência em diferentes tipos de instalação.",
    },
    {
      icon: <MdDesignServices />,
      title: "Atendimento Personalizado",
      desc: "Projetos sob medida, respeitando o estilo e a necessidade de cada ambiente.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Garantia de Segurança",
      desc: "Todos os serviços possuem garantia e suporte completo para maior tranquilidade.",
    },
    {
      icon: <FaClock />,
      title: "Rapidez e Eficiência",
      desc: "Trabalhamos com agilidade, pontualidade e respeito aos prazos combinados.",
    },
    {
      icon: <MdSupportAgent />,
      title: "Suporte Pós-Venda",
      desc: "Acompanhamos nossos clientes mesmo após a instalação, garantindo total satisfação.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Preço Justo e Transparente",
      desc: "Oferecemos orçamentos claros e acessíveis, sem taxas ocultas ou surpresas.",
    },
    {
      icon: <FaChild />,
      title: "Proteção Infantil e Pet",
      desc: "Produtos e instalações pensadas para proteger crianças e animais de estimação.",
    },
    {
      icon: <MdOutlineHomeRepairService />,
      title: "Respeito à Estética",
      desc: "Instalações discretas que preservam o design e a harmonia do seu espaço.",
    },
  ];

  const items = data || defaultData;

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className={styles.cards}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>

      {carousel ? (
        <div className={styles.carousel}>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
