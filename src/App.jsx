import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { IDE } from "./pages/IDE"
import { Login } from "./pages/Login"
import MenuProvider from "./providers/MenuProvider"

function App() {

  return (
    <>
      <BrowserRouter>
        <MenuProvider>
          <Routes>
            <Route path="/" element={<IDE />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<IDE />} />
          </Routes>
        </MenuProvider>
      </BrowserRouter>
    </>
  );
}

export default App
