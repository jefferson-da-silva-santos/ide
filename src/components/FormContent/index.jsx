// components/FormContent.jsx (COMPLETO com Formik/Yup e NOVOS CAMPOS)

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react"; 

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


export const FormContent = () => {
  const formik = useFormik({
    initialValues: {
      palavraEsperanca: "",
      textoBiblico: "",
      autorFrase: "",
      background: "",
      louvor: "",
    },
    validationSchema: Yup.object({
      palavraEsperanca: Yup.string().required(
        "A Palavra de Esperança é obrigatória 🙏"
      ),
      textoBiblico: Yup.string().required("O Texto Bíblico é obrigatório 📖"),
      background: Yup.string().required("O Background é obrigatório 🎨"),
      louvor: Yup.string().required("O Louvor é obrigatório"),
      tema: Yup.string().required("O Tema de Cores é obrigatório")
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

      {/* --- CAMPO ANTIGO: Palavra de Esperança --- */}
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
      </div>

      {/* --- CAMPO ANTIGO: Texto Bíblico --- */}
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
      </div>

      {/* --- NOVO CAMPO: Background de Fundo (Select) --- */}
      <div className="form-group">
        <label htmlFor="background">Background de Fundo *</label>
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
      </div>

      {/* --- NOVO CAMPO: Louvor (Select) --- */}
      <div className="form-group">
        <label htmlFor="louvor">Louvor Selecionado *</label>
        <select
          id="louvor"
          name="louvor"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.louvor}
          className={
            formik.touched.louvor && formik.errors.louvor ? "input-error" : ""
          }
        >
          <option value="" disabled>
            Selecione um Louvor/Estilo
          </option>
          {louvorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {formik.touched.louvor && formik.errors.louvor && (
          <span className="error">{formik.errors.louvor}</span>
        )}
      </div>

      {/* TEMA COLOR SELECT */}
      <div className="form-group">
        <label htmlFor="tema">Tema de Cores *</label>
        <select
          id="tema"
          name="tema"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tema}
          className={formik.touched.tema && formik.errors.tema ? "input-error" : ""}
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
      </div>
      
      <div className="form-group">
        <label htmlFor="autorFrase">Autor da Palavra (opcional)</label>
        <input
          id="autorFrase"
          name="autorFrase"
          type="text"
          placeholder="Ex: Apóstolo Paulo"
          onChange={formik.handleChange}
          value={formik.values.autorFrase}
        />
      </div>

      <button type="submit">Proclamar a Mensagem 📖</button>
    </form>
  );
};
