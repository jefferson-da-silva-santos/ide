import * as Yup from "yup";


const validationSchemaIDE = Yup.object({
  palavraEsperanca: Yup.string().notRequired(),
  textoBiblico: Yup.string().notRequired(),
  referencia: Yup.string().notRequired(),
  background: Yup.string().notRequired(),
  louvor: Yup.string().notRequired(),
  tema: Yup.string().notRequired(),
});

export default validationSchemaIDE;