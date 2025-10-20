import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import useApi from "../../hooks/useApi";
import { showNotification } from "../../utils/showNotyf";


export const IDE = () => {
  const [content, setContent] = useState(null); 
  
  const {
    loading: loadingContent,
    fetchData: fetchContent
  } = useApi({ endpoint: "/conteudos/1", method: "GET" });

  const handleRequest = async () => {
    try {
      const result = await fetchContent();
      if (result && result.status >= 200 && result.status < 300) {
        const parsedContent = result.data.data.valor; 
        setContent(parsedContent); 
      }
    } catch (error) {
      showNotification("error", "Erro ao carregar o conteúdo");
      console.error("Erro ao processar conteúdo:", error);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);
  
  if (loadingContent || content === null) {
      return (
          <div className={`ide-container ${content?.tema || 'default'}-theme`}>
              <div className="loading-indicator">
                  Carregando o conteúdo... {/* Substitua por um spinner real */}
              </div>
          </div>
      );
  }

  // Desestruturando o objeto 'content' para fácil acesso
  // Se content for null ou indefinido, ele não chegará aqui devido à verificação acima.
  const { mensagem, versiculo, referencia, link_louvor, tema } = content;

  return (
    <div className={`ide-container ${tema}-theme`}> 
      <Link className="ide-link-login" target="_blank" to={"/login"}></Link>

      <Link className="ide-link" to={""}>
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

          {/* Reprodutor de música (YouTube embed) */}
          <div className="ide-player">
            <p>🎵 Um louvor para o seu coração:</p>
            <iframe
              title="Música Gospel - Jesus"
              // 4. Substituir o link do louvor
              src={link_louvor} 
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