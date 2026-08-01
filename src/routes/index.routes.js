import { Router } from "express";
import recetasRouter from "./recetas.routes.js"
// http://localhost:3000/api/recetas/

const router = Router()

router.use('/recetas', recetasRouter)

export default router