import { body, param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Receta from "../models/receta.js";

export const reglasReceta = [
  body("nombre")
    .isString()
    .withMessage("El dato debe ser un string")
    .isLength({ min: 5, max: 100 })
    .withMessage("El nombre de la receta debe contener entre 5 y 100 caracteres")
    .custom(async (valor, { req }) => {
      const recetaBuscada = await Receta.findOne({ nombre: valor });
      //pregunto sino existe la receta buscada
      if (!recetaBuscada) {
        return true;
      }
      //verificacar si estamos editando
      if(req.params?.id && recetaBuscada._id.toString() === req.params.id){
        return true
      }
      // si ya existe el nombre de la receta buscada retorno error
      throw new Error('El nombre de la receta ingresada ya exite, dato no valido ingrese un nombre distinto al ingresado')
    }),
  body("categoria")
    .isString()
    .withMessage("El dato  de la categoria debe ser un string")
    .isIn(['Desayuno', 'Almuerzo','Merienda', 'Cena'])
    .withMessage(
      "La categoria debe ser algunos de los siguientes valores: 'Desayuno', 'Almuerzo','Merienda', 'Cena'"
    ),
  body("imagen")
    .isString()
    .withMessage("La imagen debe ser un string")
    .matches(/^https:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)$/)
    .withMessage(
      "La imagen debe ser una URl valida terminada en: 'jpg|jpeg|png|webp|avif|svg'"
    ),
  body("descripcion")
    .isString()
    .withMessage("La descripcion debe ser un string")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripcion debe contener entre 10 y 500 caracteres")
];

// para validar en post y put
export const validacionReceta=[...reglasReceta.map((regla)=> regla.notEmpty().withMessage('Este campo es obligaotio')), resultadoValidacion]

export const validacionRecetaPatch = [...reglasReceta.map((regla) => regla.optional({values:'falsy'})), resultadoValidacion]

export const validacionIDReceta = [
  param("id")
    .isMongoId()
    .withMessage(
      "El ID no conrresponde con el formato correcto de un ID de MongoDB"
    ),
  resultadoValidacion,
];
