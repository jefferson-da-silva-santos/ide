import { showNotification } from "../utils/showNotyf";

export const handleGetContents = async (
  fetchContent,
  setContent,
  pageIde = false
) => {
  try {
    const result = await fetchContent();
    if (result && result.status >= 200 && result.status < 300) {
      let parsedContent;
      if (pageIde) {
        parsedContent = result.data.data.valor
      } else {
        parsedContent = result.data.data;
      }
      setContent(parsedContent);
    }
  } catch (error) {
    showNotification("error", "Erro ao carregar o conteúdo");
    console.error("Erro ao processar conteúdo:", error);
  }
}

export const handleUpdateContent = async (
  fetchContent
) => {
  try {
    const result = await fetchContent();
    if (result && result.status >= 200 && result.status < 300) {
      showNotification("success", "Conteúdo atualizado com sucesso");
    }
  } catch (error) {
    showNotification("error", "Erro ao atualizar o conteúdo");
    console.error("Erro ao processar conteúdo:", error);
  }
}