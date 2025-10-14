import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <i className='bx bx-home'></i>
          <Link className="navbar-link" to='/'>Home</Link>
        </li>
        <li className="navbar-item">
          <i className='bx bx-log-out'></i>
          <Link className="navbar-link" to='/login'>Sair</Link>
        </li>
      </ul>

    </nav>
  )
}

export default NavBar