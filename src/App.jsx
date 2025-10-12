import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IDE } from "./pages/IDE";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IDE />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
