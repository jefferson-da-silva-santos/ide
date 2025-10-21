import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import useApi from "../../hooks/useApi";
import Preloader from "../../components/Preloader";
import { handleGetContents } from "../../api/requests";

export const IDE = () => {
  const [content, setContent] = useState(null); 
  
  const {
    loading: loadingContent,
    fetchData: fetchContent
  } = useApi({ endpoint: "/conteudos/1", method: "GET" });

  useEffect(() => {
    handleGetContents(fetchContent, setContent, true);
  }, []);
  
  if (loadingContent || content === null) {
      return (
          <Preloader />
      );
  }

  const { mensagem, versiculo, referencia, link_louvor, tema } = content;

  return (
    <div className={`ide-container ${tema}-theme`}> 
      <Link className="ide-link-login" target="_blank" to={"/login"}></Link>

      <Link className="ide-link" to={"https://www.instagram.com/ieadpecedro"} target="_blank">
        <i className="bx bxl-instagram"></i>
      </Link>

      <div className="ide-overlay-father">
        <div className="ide-overlay">
          <h1 className="ide-title">
            <ReactTyped
              strings={[mensagem]}
              typeSpeed={50}
              backSpeed={30}
              showCursor
              cursorChar="|"
              loop={false}
            />
          </h1>

          <p className="ide-verse">
            {versiculo}
            <br />
            <span className="ide-reference">{referencia}</span>
          </p>
          <div className="ide-player">
            <p>🎵 Um louvor para o seu coração:</p>
            <iframe
              title="Música Gospel - Jesus"
              src={link_louvor || ""} 
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