const formularioLogin = (req, res) => {
  res.render("auth/login", {
    tituloPagina: "Inicio de sesion",
  });
};

const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    tituloPagina: "Registro de usuario",
  });
};

const formularioOlvidepassword = (req, res) => {
  res.render("auth/olvide-password", {
    tituloPagina: "Recupera tu contraseña",
  });
};
export { formularioLogin, formularioRegistro, formularioOlvidepassword };
