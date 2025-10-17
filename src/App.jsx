import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { IDE } from "./pages/IDE"
import { Login } from "./pages/Login"

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<IDE />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<IDE />}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
