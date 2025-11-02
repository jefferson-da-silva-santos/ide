import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import useApi from "../../hooks/useApi";
import Preloader from "../../components/Preloader";
import { handleGetContents } from "../../api/requests";

export const IDE = ({ id }) => {
  const [content, setContent] = useState(null);

  const { loading: loadingContent, fetchData: fetchContent } = useApi({
    endpoint: `/conteudos/${id}`,
    method: "GET",
  });

  useEffect(() => {
    if (id) {
      localStorage.setItem("paginaSelecionada", id);
    }
  }, [id]);

  useEffect(() => {
    handleGetContents(fetchContent, setContent, true);
  }, []);

  if (loadingContent || content === null) {
    return <Preloader />;
  }

  const { mensagem, versiculo, referencia, link_louvor, background, tema } =
    content;

  return (
    <div
      className={`ide-container ${tema}-theme`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Link className="ide-link-login" target="_blank" to={"/login"}></Link>

      <Link
        className={`ide-link ${tema}-ide-link`}
        to={"https://www.instagram.com/ieadpecedro"}
        target="_blank"
      ></Link>

      <div className={`ide-overlay-father ${tema}-ide-overlay-father`}>
        <div className="ide-overlay">
          <h1 className={`ide-title ${tema}-ide-title`}>
            <ReactTyped
              strings={[mensagem]}
              typeSpeed={50}
              backSpeed={30}
              showCursor
              cursorChar="|"
              loop={false}
            />
          </h1>

          <p className={`ide-verse ${tema}-ide-verse`}>
            {versiculo}
            <br />
            <span className={`ide-reference ${tema}-ide-reference`}>
              {referencia}
            </span>
          </p>
          <div className="ide-player">
            <p className={`ide-louvor ${tema}-ide-louvor`}>
              🎵 Um louvor para o seu coração:
            </p>
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
