import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import styles from "./Gallery.module.css";
import bannerImage from "../assets/images/varanda.jpeg";

const imageModules = import.meta.glob(
  "../assets/images/*.{jpeg,jpg,png,webp}",
  {
    eager: true,
  }
) as Record<string, { default: string }>;

const images: string[] = Object.values(imageModules).map((mod) => mod.default);

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 8;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Banner
        title="Cada rede, uma história de proteção."
        subtitle="Conheça nossos projetos e veja como transformamos ambientes com segurança, elegância e confiança."
        image={bannerImage}
      />
      <main className={styles.gallery}>
        <section className={styles.hero}>
          <h1>Galeria de Projetos</h1>
          <p>
            Selecionamos algumas instalações realizadas pela Abençoado Redes
            para que você veja de perto a qualidade, o acabamento e o cuidado em
            cada detalhe.
          </p>
        </section>

        <section className={styles.grid}>
          {currentImages.map((img, index) => (
            <div
              key={index}
              className={styles.imageWrapper}
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`Projeto ${startIndex + index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </section>

        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            ← Anterior
          </button>

          <span>
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próxima →
          </button>
        </div>

        {selectedImg && (
          <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="Imagem ampliada" />
          </div>
        )}
      </main>
    </>
  );
};

export default Gallery;
