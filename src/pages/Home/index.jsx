import NavBar from "../../components/NavBar"
import { FormContent } from "../../components/FormContent"

export const Home = () => {
  return (
    <div className="container-home">
      <NavBar />
      <header className="header-home">
        <div className="header-user">
          <i className="bx bx-user"></i>
          <span>Nome do Usuário</span>
        </div>
      </header>
      <main className="main-home">
        <FormContent />
      </main>
    </div>
  )
}