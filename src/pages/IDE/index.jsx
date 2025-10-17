import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

export const IDE = () => {
  return (
    <div className="ide-container">
      <Link className="ide-link-login" target="_blank" to={"/login"}></Link>

      <Link className="ide-link" to={""}>
        <i className="bx bxl-instagram"></i>
      </Link>

      <div className="ide-overlay-father">
        <div className="ide-overlay">
          <h1 className="ide-title">
            <ReactTyped
              strings={[
                '"Jesus não se esqueceu de você! Ele ainda te espera, e te ama."',
              ]}
              typeSpeed={50}
              backSpeed={30}
              showCursor
              cursorChar="|"
              loop={false}
            />
          </h1>

          <p className="ide-verse">
            "Porque o filho do homem veio buscar e salvar o que se havia
            perdido"
            <br />
            <span className="ide-reference">Lc 19:26</span>
          </p>

          {/* Reprodutor de música (YouTube embed) */}
          <div className="ide-player">
            <p>🎵 Um louvor para o seu coração:</p>
            <iframe
              title="Música Gospel - Jesus"
              src="https://www.youtube.com/embed/WH9YOCUebxo?modestbranding=1&rel=0&controls=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
