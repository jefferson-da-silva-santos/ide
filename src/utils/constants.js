export const backgroundOptions = [
  {
    value: "https://i.imgur.com/K4Rq0pt.jpeg",
    label: "Cruzada na Praça",
  },
  {
    value:
      "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/IDE-PROJECT/coroa.jfif",
    label: "Cora de espinhos",
  },
  {
    value:
      "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/IDE-PROJECT/ceu.jfif",
    label: "Ceu azul",
  },
  {
    value: "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/IDE-PROJECT/ceu2.jfif",
    label: "Ceu azul 2",
  },
  {
    value:
      "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/IDE-PROJECT/cruz.jfif",
    label: "Cruz",
  },
  {
    value: "https://i.imgur.com/YIYqBV7.jpeg",
    label: "Jesus o Bom Pastor",
  },
  {
    value: "https://i.imgur.com/EVI0PBA.jpeg",
    label: "A volta de Jesus"
  },
  {
    value: 'https://i.imgur.com/2jzRRVz.png',
    label: 'Azul IEADPE'
  },
  {
    value: 'https://i.imgur.com/zYpe1zI.jpeg',
    label: 'Mão levantada em adoração'
  },
  {
    value: 'https://i.imgur.com/3HoQvZa.png',
    label: 'Geraldão'
  }
];

export const temaOptions = [
  { value: "light", label: "Claro Forte" },
  { value: "light-weak", label: "Claro Fraco" },
  { value: "dark", label: "Escuro Forte" },
  { value: "dark-weak", label: "Escuro Fraco" },
  { value: "azul-ieadpe", label: "Azul IEADPE" },
  { value: 'adoracao', label: 'Adoração' },
  { value: 'geraldao', label: 'Geraldão' }
];

export const MOCK_DATA_INITIAL = {
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

export const initialValuesFromApi = (apiData) => ({
  palavraEsperanca: apiData?.valor?.mensagem || "",
  textoBiblico: apiData?.valor?.versiculo || "",
  referencia: apiData?.valor?.referencia || "",
  louvor: apiData?.valor?.link_louvor || "",
  background: apiData?.valor?.background || "",
  tema: apiData?.valor?.tema || "",
});