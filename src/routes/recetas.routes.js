import { Router } from "express";
import { borrarRecetaPorID, crearReceta, editarRecetaPorID, listarRecetas, obtenerRecetaPorID } from "../controllers/recetas.controllers.js";
import { validacionIDReceta, validacionReceta, validacionRecetaPatch } from "../middlewares/validacionReceta.js";

const router = Router()

router.route('/').post(validacionReceta,crearReceta).get(listarRecetas)
router.route('/:id').get(validacionIDReceta,obtenerRecetaPorID).delete(validacionIDReceta,borrarRecetaPorID).put([validacionIDReceta,validacionReceta],editarRecetaPorID).patch(validacionRecetaPatch,editarRecetaPorID)

export default router;