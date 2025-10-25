import { useState } from "react";
import api from "../api/api";
import useAuth from "./useAuth";

const useApi = ({
  endpoint = "",
  method = "GET",
  body = null,
  headers = {},
  params = {},
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { logout } = useAuth();

  async function fetchData(
    end = endpoint,
    met = method,
    bod = body,
    head = headers,
    par = params
  ) {
    setLoading(true);
    setError(null);

    try {
      const response = await api.request({
        url: end,
        method: met,
        data: bod,
        headers: head,
        params: par,
      });

      if (response.status >= 200 && response.status < 300) {
        setData(response.data?.data || response.data);
      } else {
        const msgErro =
          response.data?.error ||
          "Erro inesperado na resposta do servidor.";
        setError(msgErro);
      }

      return response;
    } catch (err) {
      if (err.response.status === 401 || err.response.status === 403) {
        logout();
      }
      console.error("Erro na requisição:", err);

      // Evita quebra caso algum campo esteja ausente
      const msgErro =
        err?.response?.data?.error ||
        err?.response?.data ||
        err?.message ||
        "Erro desconhecido ao comunicar com o servidor.";

      setError(msgErro);

      // Retorna um objeto padronizado mesmo em erro
      return {
        status: err?.response?.status || 500,
        data: { error: msgErro },
        error: true,
      };
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchData };
};

export default useApi;
