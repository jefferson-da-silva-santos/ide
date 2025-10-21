import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import L_logo from '../../assets/image/L_logo.png';
import useAuth from "../../hooks/useAuth";
import { formatDataLogin } from "../../utils/format";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [showFormForgotPassword, setShowFormForgotPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { login, loadingLogin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home"); 
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 820);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .required("A senha é obrigatória"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await login(formatDataLogin(values));
    },
  });

  return (
    <>
    {!isAuthenticated && (
      <div className="container-login">
      <section className="wrapper">
        <section className={`col $ ${!showFormForgotPassword && !isMobile ? 'col1-login-class' : 'col1-forgot-class'}`}></section>
        <section className={`col ${!showFormForgotPassword && !isMobile ? 'col2-login-class' : 'col2-forgot-class'}`}>
          <h1 className="title">{!showFormForgotPassword ? (
            <div className="title-login">
              <img className="logo" src={L_logo} alt="" />
              <span>ogin</span>
            </div>
          ) : "Recuperar senha"}</h1>
          {!showFormForgotPassword && (
             <form className="form" onSubmit={formik.handleSubmit}>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="Aqui é o seu email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <small className="erro">{formik.errors.email}</small>
              )}
            </label>

            <label>
              <span>Password</span>
              <div className="input-password">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  name="password"
                  placeholder="Aqui é a sua senha"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <button
                  className="button-hide-password"
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  <i className={`bx ${mostrarSenha ? "bx-show" : "bx-hide"}`}></i>
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <small className="erro">{formik.errors.password}</small>
              )}
            </label>

            <small className="forgot-password" onClick={() => setShowFormForgotPassword(!showFormForgotPassword)}>
              Esqueceu sua senha? Confie e siga em frente.
            </small>

            <button className="btn-login" type="submit">
              Entrar
            </button>
          </form>
          )}
          {showFormForgotPassword && (
            <form className="form">
              <label>
                <span>Confirme seu e-mail</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Aqui é o seu email"
                />
              </label>

              <small className="forgot-password" onClick={() => setShowFormForgotPassword(!showFormForgotPassword)}>
                Voltar para área de login
              </small>
              <button className="btn-login" type="submit">
                {!showFormForgotPassword ? loadingLogin ? "Carregando..." : "Entrar" : "Recuperar senha"}
              </button>
            </form>
          )}
        </section>
      </section>
    </div>
    )}
    </>
  );
};
