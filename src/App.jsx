import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { IDE } from "./pages/IDE";
import { Login } from "./pages/Login";
import MenuProvider from "./providers/MenuProvider";
import AuthProvider from "./providers/AuthProvider";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <Routes>
            <Route path="/" element={<IDE />} />
            <Route
              path="/home"
              element={
                <PrivateRouter>
                  <Home />
                </PrivateRouter>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<IDE />} />
          </Routes>
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
