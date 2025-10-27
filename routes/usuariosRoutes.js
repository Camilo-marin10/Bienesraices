import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  formularioOlvidepassword,
  registrar,
} from "../controllers/usuariosController.js";
const router = express.Router();

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.post("/registro", registrar);
router.get("/olvide-password", formularioOlvidepassword);

export default router;
