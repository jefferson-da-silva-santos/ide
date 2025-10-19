import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { isAuthenticated, user, loadingLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loadingLogin) return;

    if (!isAuthenticated) {
      console.log("Usuário não autenticado, redirecionando...");
      navigate("/login");
    } else {
      console.log("Usuário autenticado:", user);
    }
  }, [isAuthenticated, loadingLogin, navigate, user]);

  if (loadingLogin) {
    return (
      <div className="loading-screen">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return children;
};

export default PrivateRouter;
