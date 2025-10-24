export const backgroundOptions = [
  {
    value:
      "https://scontent.cdninstagram.com/v/t51.75761-15/474548298_18343645135194850_681295967062939706_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzU1MDQ1NDEyOTgwMzgyNjU4NA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Z4zjirieUHQQ7kNvwED5YaE&_nc_oc=AdmkrNVJHUB-zkob7Ph9DcLl74SCMiJVh0G1Ky4qksy4mvsGZZckfwkycWhIw5OCifk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=OVmBiosjR6_aovBMq_qT1g&oh=00_AfeeA7dmS-fMUT4xyujumhDzk69bOvtj2oofSZF3X0ltiw&oe=68F1CABC",
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
  }
];


export const temaOptions = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
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