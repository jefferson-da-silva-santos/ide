import NavBar from "../../components/NavBar"
import { FormContent } from "../../components/FormContent"
import Footer from "../../components/Footer"
import useMenu from "../../hooks/useMenu";

export const Home = () => {
  const { toggleMenu } = useMenu();
  return (
    <div className="container-home">
      <NavBar />
      <header className="header-home">
        <button className="menu" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </button>
        <div className="header-user">
          <i className="bx bx-user"></i>
          <span>Nome do Usuário</span>
        </div>
      </header>
      <main className="main-home">
        <FormContent />
      </main>
      <Footer />
    </div>
  )
}