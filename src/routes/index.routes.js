import { Router } from "express";
import recetasRouter from "./recetas.routes.js"
import usuariosRouter from "./usuarios.routes.js"
import categoriasRouter from "./categorias.routes.js"
// http://localhost:3000/api/recetas/
// http://localhost:3000/api/usuarios/

const router = Router()

router.use('/recetas', recetasRouter)
router.use('/usuarios', usuariosRouter)
router.use('/categorias', categoriasRouter)

export default router