import { Link } from "react-router-dom";
import banner from "../../assets/image/banner.png";
import useMenu from "../../hooks/useMenu";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import AdminOnly from "../AdminOnly";

const NavBar = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const [classMenu, setClassMenu] = useState("close-menu");
  const { logout } = useAuth();

  useEffect(() => {
    setClassMenu(isMenuOpen ? "open-menu" : "close-menu");
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${classMenu}`}>
      {/* Alt da imagem ajustado */}
      <img
        className="navbar-logo"
        src={banner}
        alt="Logo do Banner da Aplicação"
      />

      <button
        className="close-nav"
        onClick={toggleMenu}
        style={{ display: isMenuOpen ? "flex" : "none" }}
      >
        <i className="bx bx-x"></i>
      </button>

      <ul className="navbar-list">
        <li className="navbar-item" onClick={toggleMenu}>
          <i className="bx bx-home"></i>
          <Link className="navbar-link" to="/home">
            Home
          </Link>
        </li>
        <AdminOnly>
          <li className="navbar-item" onClick={toggleMenu}>
            <i className="bx bx-user"></i>
            <Link className="navbar-link" to="/invitation">
              Convidar
            </Link>
          </li>
        </AdminOnly>
        <li className="navbar-item" onClick={toggleMenu}>
          <i className="bx bx-log-out"></i>
          <Link className="navbar-link" to="/login" onClick={logout}>
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
