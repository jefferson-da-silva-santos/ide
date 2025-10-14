import { useFormik } from "formik";
import * as Yup from "yup";

export const FormContent = () => {
  const formik = useFormik({
    initialValues: {
      palavraEsperanca: "",
      textoBiblico: "",
      autorFrase: "",
    },
    validationSchema: Yup.object({
      palavraEsperanca: Yup.string().required("A Palavra de Esperança é obrigatória 🙏"),
      textoBiblico: Yup.string().required("O Texto Bíblico é obrigatório 📖"),
    }),
    onSubmit: (values) => {
      alert(`Mensagem enviada com sucesso! 🙌\n\n${JSON.stringify(values, null, 2)}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
       <h2>Formulário Evangelístico ✝️</h2>
      <div>
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
          <div>{formik.errors.palavraEsperanca}</div>
        )}
      </div>

      <div>
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
          <div>{formik.errors.textoBiblico}</div>
        )}
      </div>

      <div>
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
