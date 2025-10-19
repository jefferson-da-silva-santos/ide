/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputSwitch } from "primereact/inputswitch";

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

// Simulação de Dados Atuais
const DADOS_ATUAIS = {
  palavraEsperanca: "A paz do Senhor Jesus esteja convosco!",
  textoBiblico: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. (João 3:16)",
  autorFrase: "Apóstolo Paulo",
  background: "gradiente",
  louvor: "hino-tradicional",
  tema: "escuro",
};

export const FormContent = () => {
  const [showCurrentData, setShowCurrentData] = useState(false);

  const toggleShowCurrentData = () => {
    setShowCurrentData(!showCurrentData);
  };

  const formik = useFormik({
    initialValues: {
      palavraEsperanca: "",
      textoBiblico: "",
      autorFrase: "",
      background: "",
      louvor: "",
      tema: "",
    },
    validationSchema: Yup.object({
      palavraEsperanca: Yup.string().required(
        "A Palavra de Esperança é obrigatória 🙏"
      ),
      textoBiblico: Yup.string().required("O Texto Bíblico é obrigatório 📖"),
      autorFrase: Yup.string().notRequired(), 
      background: Yup.string().required("O Background é obrigatório 🎨"),
      louvor: Yup.string().required("O Louvor é obrigatório"),
      tema: Yup.string().required("O Tema de Cores é obrigatório"),
    }),
    onSubmit: (values) => {
      alert(
        `Mensagem enviada com sucesso! 🙌\n\n${JSON.stringify(values, null, 2)}`
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="header-form">
        <h2>Formulário Evangelístico ✝️</h2>
      </div>

     <div>
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <InputSwitch checked={showCurrentData} onChange={toggleShowCurrentData} />
        {showCurrentData ? "Ocultar Dados Atuais" : "Visualizar Dados Atuais 🔎"}
      </label>
    </div>
      
      {showCurrentData && (
        <p style={{ width: '100%', marginBottom: '15px', textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '4px'}}>
         <strong>Dados Atuais (Preview): </strong> Abaixo de cada campo de <strong>Nova Proclamação</strong>, você vê o dado que está atualmente ativo.
        </p>
      )}

      <div className="form-group">
        <label htmlFor="palavraEsperanca">Nova Proclamação: Palavra de Esperança *</label>
        
        {/* CAMPO ORIGINAL DE EDIÇÃO/NOVA PROCLAMAÇÃO */}
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
        
        {/* CAMPO DE DADOS ATUAIS (PREVIEW) - Aparece abaixo, controlado por showCurrentData */}
        <div className={`current-data-preview ${showCurrentData ? '' : 'hidden'}`}>
          <label style={{fontSize: '0.85em'}}>Dados Atuais:</label>
          <input
            type="text"
            disabled
            value={DADOS_ATUAIS.palavraEsperanca}
            className="preview-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="textoBiblico">Nova Proclamação: Texto Bíblico *</label>
        
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

        {/* CAMPO DE DADOS ATUAIS (PREVIEW) */}
        <div className={`current-data-preview ${showCurrentData ? '' : 'hidden'}`}>
            <label style={{fontSize: '0.85em'}}>Dados Atuais:</label>
            <textarea
                rows="4"
                disabled
                value={DADOS_ATUAIS.textoBiblico}
                className="preview-input"
            ></textarea>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="autorFrase">Nova Proclamação: Autor da Frase (Opcional)</label>
        
        <input
          id="autorFrase"
          name="autorFrase"
          type="text"
          placeholder="Ex: Pr. João"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.autorFrase}
        />
        {formik.touched.autorFrase && formik.errors.autorFrase && (
          <span className="error">{formik.errors.autorFrase}</span>
        )}

        <div className={`current-data-preview ${showCurrentData ? '' : 'hidden'}`}>
          <label style={{fontSize: '0.85em'}}>Dados Atuais:</label>
          <input
            type="text"
            disabled
            value={DADOS_ATUAIS.autorFrase}
            className="preview-input"
          />
        </div>
      </div>


     
      <div className="form-group">
        <label htmlFor="background">Nova Proclamação: Background de Fundo *</label>
        
        {/* CAMPO ORIGINAL DE EDIÇÃO/NOVA PROCLAMAÇÃO */}
        <select
          id="background"
          name="background"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.background}
          className={formik.touched.background && formik.errors.background ? "input-error" : ""}
        >
          <option value="" disabled>Selecione uma opção</option>
          {backgroundOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {formik.touched.background && formik.errors.background && (
          <span className="error">{formik.errors.background}</span>
        )}

        {/* CAMPO DE DADOS ATUAIS (PREVIEW) */}
        <div className={`current-data-preview ${showCurrentData ? '' : 'hidden'}`}>
          <label style={{fontSize: '0.85em'}}>Dados Atuais:</label>
          <input
            type="text"
            disabled
            // Busca o label correspondente ao valor nos DADOS_ATUAIS
            value={backgroundOptions.find(o => o.value === DADOS_ATUAIS.background)?.label || 'N/A'}
            className="preview-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="louvor">Nova Proclamação: Louvor Selecionado *</label>
        
        {/* CAMPO ORIGINAL DE EDIÇÃO/NOVA PROCLAMAÇÃO */}
        <select
          id="louvor"
          name="louvor"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.louvor}
          className={formik.touched.louvor && formik.errors.louvor ? "input-error" : ""}
        >
          <option value="" disabled>Selecione um Louvor/Estilo</option>
          {louvorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {formik.touched.louvor && formik.errors.louvor && (
          <span className="error">{formik.errors.louvor}</span>
        )}

        {/* CAMPO DE DADOS ATUAIS (PREVIEW) */}
        <div className={`current-data-preview ${showCurrentData ? '' : 'hidden'}`}>
          <label style={{fontSize: '0.85em'}}>Dados Atuais:</label>
          <input
            type="text"
            disabled
            // Busca o label correspondente ao valor nos DADOS_ATUAIS
            value={louvorOptions.find(o => o.value === DADOS_ATUAIS.louvor)?.label || 'N/A'}
            className="preview-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="tema">Nova Proclamação: Tema de Cores *</label>
        
        {/* CAMPO ORIGINAL DE EDIÇÃO/NOVA PROCLAMAÇÃO */}
        <select
          id="tema"
          name="tema"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tema}
          className={formik.touched.tema && formik.errors.tema ? "input-error" : ""}
        >
          <option value="" disabled>Selecione um Tema</option>
          {temaOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {formik.touched.tema && formik.errors.tema && (
          <span className="error">{formik.errors.tema}</span>
        )}
        
        {/* CAMPO DE DADOS ATUAIS (PREVIEW) */}
        <div className={`current-data-preview ${showCurrentData ? '' : 'hidden'}`}>
          <label style={{fontSize: '0.85em'}}>Dados Atuais:</label>
          <input
            type="text"
            disabled
            // Busca o label correspondente ao valor nos DADOS_ATUAIS
            value={temaOptions.find(o => o.value === DADOS_ATUAIS.tema)?.label || 'N/A'}
            className="preview-input"
          />
        </div>
      </div>
      
      <button type="submit">Proclamar a Mensagem 📖</button>
    </form>
  );
};