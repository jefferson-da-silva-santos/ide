import { useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import useApi from "../hooks/useApi";
import { showNotification } from "../utils/showNotyf";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const navigate = useNavigate();

  const { loading: loadingLogin, fetchData: fetchLogin } = useApi({
    endpoint: "",
    method: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setToken(storedToken);
        setIsAuthenticated(true);
      } catch (e) {
        console.error("Erro ao ler o usuário do localStorage:", e);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }

    setInitialized(true);
  }, []);

  async function login(data) {
    try {
      const result = await fetchLogin("/usuarios/login", "POST", data);

      if (result?.error) {
        const mensagemErro = result?.data?.error || "Falha ao fazer login.";
        showNotification("error", mensagemErro);
        return;
      }

      if (result && result.status === 200 && result.data) {
        showNotification("success", "Login realizado com sucesso");

        const token = result.data.data.token;
        const usuario = result.data.data.usuario;

        saveDataTokenInLocalStorage(token);
        saveDataUserInLocalStorage(usuario);

        setToken(token);
        setUser(usuario);
        setIsAuthenticated(true);

        navigate("/home");
      } else {
        const mensagemErro =
          result?.data?.error || "Erro inesperado ao tentar fazer login.";
        showNotification("error", mensagemErro);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);

      const mensagemErro =
        error?.response?.data?.error ||
        error?.message ||
        "Erro desconhecido ao tentar fazer login.";
      showNotification("error", mensagemErro);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  }

  const saveDataTokenInLocalStorage = (token) => {
    localStorage.setItem("token", token);
  };

  const saveDataUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  if (!initialized) return null; // evita renderização prematura

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        user,
        logout,
        token,
        loadingLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
