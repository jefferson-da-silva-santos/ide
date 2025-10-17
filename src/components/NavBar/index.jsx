import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
      <img
        className="navbar-logo"
        src="https://static.ieadpe.org.br/ieadpe_logo_colorido_pequeno.png"
        alt=""
      />
      <button className="close-nav">
        <i className="bx bx-x"></i>
      </button>
      <ul className="navbar-list">
        <li className="navbar-item">
          <i className="bx bx-home"></i>
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <i className="bx bx-log-out"></i>
          <Link className="navbar-link" to="/login">
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar