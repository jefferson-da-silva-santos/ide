import { useState } from "react";
import api from "../api/api";

const useApi = ({
  endpoint = "",
  method = "GET",
  body = null,
  headers = {},
  params = {}
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        params: par
      });

      if (response.status >= 200 && response.status < 300) {
        setData(response.data.data);
      } else {
        setError(response);
      }

      return response;
    } catch (error) {
      setError(error.response?.data.data.error || error.message);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchData };
};

export default useApi;
