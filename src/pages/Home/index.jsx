import NavBar from "../../components/NavBar";
import { FormContent } from "../../components/FormContent";
import Footer from "../../components/Footer";
import useMenu from "../../hooks/useMenu";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export const Home = () => {
  const { toggleMenu } = useMenu();
  const { user } = useAuth()

  return (
    <div className="container-home">
      <NavBar />
      <header className="header-home">
        <button className="menu" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </button>
        <div className="group-buttons">
          <Link to="/" className="ide-link-ide">
            Página IDE
            <i class='bx bxs-flame bx-tada' ></i>
          </Link>
          <div className="header-user">
            <i className="bx bx-user"></i>
            <span>{user?.nome_usuario || "Usuário"}</span>
          </div>
        </div>
      </header>
      <main className="main-home">
        <FormContent />
      </main>
      <Footer />
    </div>
  );
};
