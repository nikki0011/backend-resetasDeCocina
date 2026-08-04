import { Router } from "express";
import { borrarRecetaPorID, crearReceta, editarRecetaPorID, listarRecetas, obtenerRecetaPorID } from "../controllers/recetas.controllers.js";
import { validacionIDReceta, validacionReceta, validacionRecetaPatch } from "../middlewares/validacionReceta.js";
import { autenticador, esAdmin } from "../middlewares/authMiddlewares.js";

const router = Router()

router.route('/').post([autenticador, esAdmin,validacionReceta],crearReceta).get(listarRecetas)
router.route('/:id').get(validacionIDReceta,obtenerRecetaPorID).delete([autenticador, esAdmin,validacionIDReceta],borrarRecetaPorID).put([autenticador, esAdmin,validacionIDReceta,validacionReceta],editarRecetaPorID).patch([autenticador, esAdmin,validacionRecetaPatch],editarRecetaPorID)

export default router;