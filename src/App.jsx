import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { IDE } from "./pages/IDE";
import { Login } from "./pages/Login";
import MenuProvider from "./providers/MenuProvider";
import AuthProvider from "./providers/AuthProvider";
import PrivateRouter from "./router/PrivateRouter";
import { FormContent } from "./components/FormContent";
import Invitation from "./pages/invitation";
import AdminOnly from "./components/AdminOnly";

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
                  <Home children={<FormContent />} />
                </PrivateRouter>
              }
            />
            <Route
              path="/invitation"
              element={
                <PrivateRouter>
                  <Home children={
                    <AdminOnly sendHome>
                      <Invitation />
                    </AdminOnly>
                  } />
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
