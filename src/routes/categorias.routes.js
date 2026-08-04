import { Router } from "express"
import { borrarCategoriaPorID, crearCategoria, editarCategoriaPorID, listarCategorias, obtenerCategoriasPorID } from "../controllers/categorias.controllers.js";
import { autenticador, esAdmin } from "../middlewares/authMiddlewares.js";
import { validacionCategoria, validacionCategoriaPatch, validacionIDCategoria } from "../middlewares/validacionCategoria.js";

const router = Router();


router.route("/").post([autenticador, esAdmin, validacionCategoria],crearCategoria).get(listarCategorias)
router.route("/:id").get(validacionIDCategoria,obtenerCategoriasPorID).delete([autenticador, esAdmin,validacionIDCategoria],borrarCategoriaPorID).put([autenticador, esAdmin,validacionIDCategoria,validacionCategoria],editarCategoriaPorID).patch([autenticador, esAdmin,validacionCategoriaPatch],editarCategoriaPorID)

export default router