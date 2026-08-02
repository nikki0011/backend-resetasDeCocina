import { Router } from "express";
import { confirmarCodigoVerificacion, crearUsuario, listarUsuarios, login, logout, registrarUsuario, solicitarNuevoCodigo } from "../controllers/usuarios.controllers.js";


const router = Router()
// http://localhost:3000/api/usuarios/

router.route('/').post(crearUsuario).get(listarUsuarios)
router.route('/registro').post(registrarUsuario)
router.route('/verificar-cuenta').post(confirmarCodigoVerificacion)
router.route('/reenviar-codigo').post(solicitarNuevoCodigo)
router.route('/login').post(login)
router.route('/logout').post(logout)


export default router