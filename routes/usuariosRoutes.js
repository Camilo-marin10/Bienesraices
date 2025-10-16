import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  formularioOlvidepassword,
} from "../controllers/usuariosController.js";
const router = express.Router();

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.get("/olvide-password", formularioOlvidepassword);

export default router;
