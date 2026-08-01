import { Router } from "express";
import { crearUsuario, listarUsuarios, registrarUsuario } from "../controllers/usuarios.controllers.js";


const router = Router()
// http://localhost:3000/api/usuarios/

router.route('/').post(crearUsuario).get(listarUsuarios)
router.route('/registro').post(registrarUsuario)

export default router