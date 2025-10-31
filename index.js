import express from "express";
import usuarioRoutes from "./routes/usuariosRoutes.js";
import db from "./config/db.js";

// Crear APP
const app = express();

//conexion a la db
try {
  await db.authenticate();
  db.sync();
  console.log("La conexion es correcta");
} catch (error) {
  console.error("No se puede conectar", error);
}

//Habilitar la lectura de los formularios
app.use(express.urlencoded({ extended: true }));

// Habilitar Pug
app.set("view engine", "pug");
app.set("views", "./views");

//Definir la ruta de el public
app.use(express.static("public"));

// Routing
app.use("/auth", usuarioRoutes);

// Definir el puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("El servidor esta corriendo en el puerto: " + port);
});
