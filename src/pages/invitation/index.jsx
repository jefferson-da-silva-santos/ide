import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { handleGetInvitation } from "../../api/requests";

const Invitation = () => {
  const [invitation, setInvitation] = useState("");
  const [copied, setCopied] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const [email, setEmail] = useState({
    email: user ? user.email : "",
  });

  const {
    error: errorGetInvitation,
    loading: loadingGetInvitation,
    fetchData: fetchGetInvitation,
  } = useApi({ endpoint: "/convites", method: "POST", body: email });

  const handleRequestLink = async () => {
    await handleGetInvitation(fetchGetInvitation, setInvitation);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(invitation)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Erro ao copiar", err));
  };

  return (
    <section className="invitation">
      <div className="texts">
        <h1 className="invitation__title">Gerar link de convite</h1>
        <p className="invitation__description">
          Aqui você pode gerar um link de convite para que seus amigos se
          cadastrem
        </p>
      </div>

      <div className="content">
        <button
          className="content__button"
          onClick={handleRequestLink}
          disabled={loadingGetInvitation}
        >
          {loadingGetInvitation ? "Solicitando..." : "Solicitar link"}
        </button>

        {errorGetInvitation && (
          <p style={{ color: "red" }}>
            Erro ao gerar o convite: {errorGetInvitation}
          </p>
        )}

        {invitation && (
          <div className="content__group">
            <input
              value={invitation}
              className="content__input"
              type="text"
              disabled
            />
            <button
              className="content__button-copy"
              onClick={handleCopy}
              aria-label="Copiar link"
            >
              <i
                className={`bx ${copied ? "bxs-check-circle" : "bx-copy"}`}
                style={{
                  color: copied ? "#33ff00" : "inherit",
                  transition: "color 0.2s ease",
                }}
              ></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Invitation;
