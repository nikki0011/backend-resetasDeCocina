import { Router } from "express";
import { borrarRecetaPorID, crearReceta, editarRecetaPorID, listarRecetas, obtenerRecetaPorID } from "../controllers/recetas.controllers.js";

const router = Router()

router.route('/').post(crearReceta).get(listarRecetas)
router.route('/:id').get(obtenerRecetaPorID).delete(borrarRecetaPorID).put(editarRecetaPorID).patch(editarRecetaPorID)

export default router;