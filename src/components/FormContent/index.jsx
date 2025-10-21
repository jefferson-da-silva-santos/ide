/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputSwitch } from "primereact/inputswitch";
import useApi from "../../hooks/useApi";
import CurrentDataPreview from "./CurrentDataPreview";
import { handleGetContents } from "../../api/requests"; // Assumindo que handleGetContents foi corrigida
import { showNotification } from "../../utils/showNotyf";

// --- OPÇÕES DE SELEÇÃO ---
export const backgroundOptions = [
  { value: "cor-solida", label: "Cor Sólida" },
  { value: "imagem-textura", label: "Imagem/Textura" },
  { value: "gradiente", label: "Gradiente Suave" },
  { value: "tema-padrao", label: "Tema Padrão do Sistema" },
  { value: "fundo-animado", label: "Fundo Animado (Vídeo)" },
];

export const louvorOptions = [
  { value: "acustico-suave", label: "Acústico Suave" },
  { value: "contemporaneo-ritmado", label: "Contemporâneo Ritmado" },
  { value: "hino-tradicional", label: "Hino Tradicional" },
  { value: "coral", label: "Estilo Coral" },
  { value: "rock-gospel", label: "Rock/Pop Gospel" },
];

export const temaOptions = [
  { value: "claro", label: "Claro" },
  { value: "escuro", label: "Escuro" },
];

// DADOS DE REFERÊNCIA INICIAL (Estrutura completa e segura)
const MOCK_DATA_INITIAL = {
  id: 1,
  chave: "mensagemPrincipal",
  valor: {
    mensagem: "",
    versiculo: "",
    referencia: "",
    link_louvor: "",
    background: "",
    tema: "",
  },
  descricao: "Mensagem principal que aparece ao acessar a página via QR Code",
};

export const FormContent = () => {
  const [showCurrentData, setShowCurrentData] = useState(false);
  const [apiData, setApiData] = useState(MOCK_DATA_INITIAL);

  const toggleShowCurrentData = () => {
    setShowCurrentData(!showCurrentData);
  };

  const {
    loading: loadingContent,
    fetchData: fetchContent,
  } = useApi({ endpoint: "/conteudos/1", method: "GET" });

  const { loading: loadingUpdateContent, fetchData: fetchUpdateContent } =
    useApi({ endpoint: "=", method: "" });

  useEffect(() => {
    handleGetContents(fetchContent, setApiData);
  }, []); 

  const initialValuesFromApi = {
    palavraEsperanca: apiData?.valor?.mensagem || "",
    textoBiblico: apiData?.valor?.versiculo || "",
    referencia: apiData?.valor?.referencia || "",
    louvor: apiData?.valor?.link_louvor || "",
    background: apiData?.valor?.background || "",
    tema: apiData?.valor?.tema || "",
  };

  const formik = useFormik({
    initialValues: initialValuesFromApi,
    enableReinitialize: true,
    validationSchema: Yup.object({
      palavraEsperanca: Yup.string().notRequired(),
      textoBiblico: Yup.string().notRequired(),
      referencia: Yup.string().notRequired(),
      background: Yup.string().notRequired(),
      louvor: Yup.string().notRequired(),
      tema: Yup.string().notRequired(),
    }),
    onSubmit: async (formValues) => {
      const novoValor = {
        ...apiData.valor,
        mensagem: formValues.palavraEsperanca,
        versiculo: formValues.textoBiblico,
        referencia: formValues.referencia,
        link_louvor: formValues.louvor,
        background: formValues.background,
        tema: formValues.tema,
      };

      const payload = {
        id: apiData.id,
        chave: apiData.chave,
        valor: novoValor,
        descricao: apiData.descricao,
      };

      try {
        const result = await fetchUpdateContent("/conteudos/1", "PUT", payload);
        if (result && result.status >= 200 && result.status < 300) {
          showNotification("success", "Gloria a Deus! Deu tudo certo.");
        }
        
      } catch (error) {
        console.error("Erro ao atualizar o conteúdo:", error);
        alert("Erro ao atualizar o conteúdo.");
      }
    },
  });

  const currentBackgroundLabel =
    backgroundOptions.find((o) => o.value === apiData?.valor?.background)
      ?.label ||
    apiData?.valor?.background ||
    "";
  const currentTemaLabel =
    temaOptions.find((o) => o.value === apiData?.valor?.tema)?.label ||
    apiData?.valor?.tema ||
    "";

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="header-form">
        <h2>Formulário Evangelístico ✝️</h2>
      </div>

      <div>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <InputSwitch
            checked={showCurrentData}
            onChange={toggleShowCurrentData}
          />
          {showCurrentData
            ? "Ocultar Dados Atuais"
            : "Visualizar Dados Atuais 🔎"}
        </label>
      </div>

      {showCurrentData && (
        <p
          style={{
            width: "100%",
            marginBottom: "15px",
            textAlign: "center",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <strong>Dados Atuais (Preview): </strong> Abaixo de cada campo você vê
          o dado que está atualmente ativo.
        </p>
      )}

      <div className="form-group">
        <label htmlFor="palavraEsperanca">Palavra de Esperança *</label>

        <input
          id="palavraEsperanca"
          name="palavraEsperanca"
          type="text"
          placeholder='Ex: "Jesus te ama!"'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.palavraEsperanca}
        />
        {formik.touched.palavraEsperanca && formik.errors.palavraEsperanca && (
          <span className="error">{formik.errors.palavraEsperanca}</span>
        )}

        <CurrentDataPreview
          label={"mensagem atual:"}
          value={apiData?.valor?.mensagem || ""}
          loadingContent={loadingContent}
          showCurrentData={showCurrentData}
        />
      </div>

      <div className="form-group">
        <label htmlFor="textoBiblico">Texto Bíblico *</label>

        <textarea
          id="textoBiblico"
          name="textoBiblico"
          rows="4"
          placeholder="Digite aqui o versículo ou texto bíblico"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.textoBiblico}
        ></textarea>
        {formik.touched.textoBiblico && formik.errors.textoBiblico && (
          <span className="error">{formik.errors.textoBiblico}</span>
        )}

        <CurrentDataPreview
          label={"versiculo atual:"}
          value={apiData?.valor?.versiculo || ""}
          loadingContent={loadingContent}
          showCurrentData={showCurrentData}
          isTextArea={true}
        />
      </div>

      <div className="form-group">
        <label htmlFor="referencia">Referência Bíblica *</label>

        <input
          id="referencia"
          name="referencia"
          type="text"
          placeholder='Ex: "João 3:16"'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.referencia}
        />
        {formik.touched.referencia && formik.errors.referencia && (
          <span className="error">{formik.errors.referencia}</span>
        )}
        <CurrentDataPreview
          label={"referência atual:"}
          value={apiData?.valor?.referencia || ""}
          loadingContent={loadingContent}
          showCurrentData={showCurrentData}
        />
      </div>

      <div className="form-group">
        <label htmlFor="background">Imagem de Fundo *</label>

        <select
          id="background"
          name="background"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.background}
          className={
            formik.touched.background && formik.errors.background
              ? "input-error"
              : ""
          }
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {backgroundOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {formik.touched.background && formik.errors.background && (
          <span className="error">{formik.errors.background}</span>
        )}

        <CurrentDataPreview
          label={"imagem de fundo atual:"}
          value={currentBackgroundLabel}
          loadingContent={loadingContent}
          showCurrentData={showCurrentData}
        />
      </div>

      <div className="form-group">
        <label htmlFor="louvor">Link do Louvor *</label>

        <input
          type="text"
          placeholder="Link do louvor (do youtube) aqui"
          id="louvor"
          name="louvor"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.louvor}
          className={
            formik.touched.louvor && formik.errors.louvor ? "input-error" : ""
          }
        />
        {formik.touched.louvor && formik.errors.louvor && (
          <span className="error">{formik.errors.louvor}</span>
        )}

        <CurrentDataPreview
          label={"link do louvor atual:"}
          value={apiData?.valor?.link_louvor || ""}
          loadingContent={loadingContent}
          showCurrentData={showCurrentData}
        />
      </div>

      <div className="form-group">
        <label htmlFor="tema">Tema de Cores *</label>

        <select
          id="tema"
          name="tema"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tema}
          className={
            formik.touched.tema && formik.errors.tema ? "input-error" : ""
          }
        >
          <option value="" disabled>
            Selecione um Tema
          </option>
          {temaOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {formik.touched.tema && formik.errors.tema && (
          <span className="error">{formik.errors.tema}</span>
        )}

        <CurrentDataPreview
          label={"tema atual:"}
          value={currentTemaLabel}
          loadingContent={loadingContent}
          showCurrentData={showCurrentData}
        />
      </div>

      <button type="submit" disabled={loadingUpdateContent}>
        {loadingUpdateContent ? "Salvando..." : "Proclamar a Mensagem 📖"}
      </button>
    </form>
  );
};
