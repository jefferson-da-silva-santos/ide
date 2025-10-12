import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { IDE } from "./components/IDE"
import { Login } from "./components/Login"

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<IDE />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
