import React from "react";
import { ReactTyped } from "react-typed";

export const IDE = () => {
  return (
    <div className="ide-container">
      <div className="ide-overlay-father">
        <div className="ide-overlay">
          <h1 className="ide-title">
            <ReactTyped
              strings={[
                '"Jesus não se esqueceu de você!! Ele ainda te espera, e te ama."',
              ]}
              typeSpeed={50}   // velocidade de digitação
              backSpeed={30}   // velocidade de apagar
              showCursor       // mostra o cursor piscando
              cursorChar="|"   // caractere do cursor
              loop={false}     // digita só uma vez
            />
          </h1>

          <p className="ide-verse">
            "Porque o filho do homem veio buscar e salvar o que se havia perdido"
            <br />
            <span className="ide-reference">Lc 19:26</span>
          </p>

          <p className="ide-speaker">Pr. Cândido de Freitas</p>
        </div>
      </div>
    </div>
  );
};
