import { Router } from "express";
import { confirmarCodigoVerificacion, crearUsuario, listarUsuarios, login, logout, obtenerPerfil, registrarUsuario, solicitarNuevoCodigo } from "../controllers/usuarios.controllers.js";
import { autenticador, esAdmin } from "../middlewares/authMiddlewares.js";


const router = Router()
// http://localhost:3000/api/usuarios/

router.route('/').post(crearUsuario).get([autenticador, esAdmin],listarUsuarios)
router.route('/registro').post(registrarUsuario)
router.route('/verificar-cuenta').post(confirmarCodigoVerificacion)
router.route('/reenviar-codigo').post(solicitarNuevoCodigo)
router.route('/login').post(login)
router.route('/logout').post(logout)

//ruta provada
router.route("/perfil").get(autenticador,obtenerPerfil)

export default router