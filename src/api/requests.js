import { showNotification } from "../utils/showNotyf";

export const handleGetContents = async (
  fetchContent,
  setContent,
  pageIde = false
) => {
  try {
    const result = await fetchContent();

    if (result?.error) {
      const mensagemErro = result?.data?.error || "Falha ao carregar o conteúdo.";
      showNotification("error", mensagemErro);
      return;
    }

    if (result && result.status >= 200 && result.status < 300) {
      let parsedContent;
      if (pageIde) {
        parsedContent = result.data.data.valor
      } else {
        parsedContent = result.data.data;
      }
      setContent(parsedContent);

    } else {
      const mensagemErro =
        result?.data?.error || "Erro inesperado ao tentar carregar o conteúdo.";
      showNotification("error", mensagemErro);
    }
  } catch (error) {
    console.error("Erro ao carregar o conteúdo:", error);
    const mensagemErro =
      error?.response?.data?.error ||
      error?.message ||
      "Erro desconhecido ao tentar carregar o conteúdo.";
    showNotification("error", mensagemErro);
  }
}

export const handleUpdateContent = async (
  fetchContent
) => {
  try {
    const result = await fetchContent();

    if (result?.error) {
      const mensagemErro = result?.data?.error || "Falha ao atualizar o conteúdo.";
      showNotification("error", mensagemErro);
      return;
    }

    if (result && result.status >= 200 && result.status < 300) {
      showNotification("success", "Conteúdo atualizado com sucesso");

    } else {
      const mensagemErro =
        result?.data?.error || "Erro inesperado ao tentar atualizar o conteúdo.";
      showNotification("error", mensagemErro);
    }
  } catch (error) {
    console.error("Erro ao atualizar o conteúdo:", error);

    const mensagemErro =
      error?.response?.data?.error ||
      error?.message ||
      "Erro desconhecido ao tentar atualizar o conteúdo.";
    showNotification("error", mensagemErro);
  }
}