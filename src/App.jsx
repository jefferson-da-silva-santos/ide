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
import { useState } from "react";

const ramdomNumber = Math.floor(Math.random() * 5) + 1;
const quantityPagesIde = [1, 2, 3, 4, 5];

function App() {
  const [destinationPage, setDestinationPage] = useState(() => {
    const savedId = localStorage.getItem("paginaSelecionada");
    return savedId ? Number(savedId) : quantityPagesIde[0];
  });
  return (
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <Routes>
            {quantityPagesIde.map((page) => (
              <Route path={`/${page}`} element={<IDE id={page} />} />
            ))}
            <Route
              path="/home"
              element={
                <PrivateRouter>
                  <Home
                    destinationPage={destinationPage}
                    children={
                      <FormContent
                        setDestinationPage={setDestinationPage}
                        quantityPagesIde={quantityPagesIde}
                      />
                    }
                  />
                </PrivateRouter>
              }
            />
            <Route
              path="/invitation"
              element={
                <PrivateRouter>
                  <Home
                    children={
                      <AdminOnly sendHome>
                        <Invitation />
                      </AdminOnly>
                    }
                  />
                </PrivateRouter>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<IDE id={ramdomNumber} />} />
          </Routes>
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
