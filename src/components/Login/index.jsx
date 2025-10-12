import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [showFormForgotPassword, setShowFormForgotPassword] = useState(false);

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
    onSubmit: (values) => {
      console.log("Enviado com fé:", values);
    },
  });

  return (
    <div className="container-login">
      <section className="wrapper">
        <section className={`col ${!showFormForgotPassword ? 'col1-login-class' : 'col1-forgot-class'}`}></section>
        <section className={`col ${!showFormForgotPassword ? 'col2-login-class' : 'col2-forgot-class'}`}>
          <h1 className="title">{!showFormForgotPassword ? "Login" : "Recuperar senha"}</h1>
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
                {!showFormForgotPassword ? "Entrar" : "Recuperar senha"}
              </button>
            </form>
          )}
        </section>
      </section>
    </div>
  );
};
