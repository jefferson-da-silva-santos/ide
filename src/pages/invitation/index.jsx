import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import useApi from "../../hooks/useApi";
import { handleGetInvitation } from "../../api/requests";

const Invitation = () => {
  const [invitation, setInvitation] = useState("");
  const [copied, setCopied] = useState(false);
  const [role, setRole] = useState("");
  const [descricao, setDescricao] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const email = user ? user.email : "";

  const {
    error: errorGetInvitation,
    loading: loadingGetInvitation,
    fetchData: fetchGetInvitation,
  } = useApi({ endpoint: "", method: "", body: {} });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      role,
      descricao,
    };
    await handleGetInvitation(() => fetchGetInvitation("/convites", "POST", body), setInvitation);
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

  const rolesDisponiveis = [
    { label: "Administrador", value: "admin" },
    { label: "Editor", value: "editor" },
    { label: "Visualizador", value: "visitante" },
  ];

  return (
    <section className="invitation">
      <div className="texts">
        <h1 className="invitation__title">Gerar link de convite</h1>
        <p className="invitation__description">
          Permita que mais pessoas cooperem com essa obra preciosa. Envie um
          link de convite #SejaUmGanhadorDeAlmas
        </p>
      </div>

      <div className="content">
        <form className="content__form" onSubmit={handleSubmit}>
          <label htmlFor="role">Qual o cargo o convidado vai exercer?</label>
          <Dropdown
            value={role}
            name="role"
            options={rolesDisponiveis}
            onChange={(e) => setRole(e.value)}
            placeholder="Selecione o cargo"
            className="content__dropdown"
          />

          <label htmlFor="descricao">Descreva o que o convidado representa</label>
          <textarea
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Ex: usuário responsável por controlar a edição do conteúdo..."
            className="content__textarea"
          />

          <button
            className="content__button"
            type="submit"
            disabled={loadingGetInvitation}
          >
            {loadingGetInvitation ? "Solicitando..." : "Solicitar link"}
          </button>
        </form>

        {errorGetInvitation && (
          <p style={{ color: "red" }}>
            Erro ao gerar o convite: {errorGetInvitation}
          </p>
        )}

        {invitation && (
          <div className="content__group">
            <input value={invitation} className="content__input" type="text" disabled />
            <button className="content__button-copy" onClick={handleCopy} aria-label="Copiar link">
              <i className={`bx ${copied ? "bxs-check-circle" : "bx-copy"}`} style={{ color: copied ? "#33ff00" : "inherit", transition: "color 0.2s ease" }}></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Invitation;
