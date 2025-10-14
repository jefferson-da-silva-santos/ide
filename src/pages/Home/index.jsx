import NavBar from "../../components/BavBar"
import { FormContent } from "../../components/FormContent"

export const Home = () => {
  return (
    <div className="container-home">
      <NavBar />
      <header className="header-home"></header>
      <main className="main-home">
        <FormContent />
      </main>
    </div>
  )
}