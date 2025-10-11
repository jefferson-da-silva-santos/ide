import { BrowserRouter, Route, Routes } from "react-router-dom"
import { IDE } from "./pages/IDE"
import Login from "./pages/login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IDE />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
