import Receta from "../models/receta.js";

export const crearReceta = async (req, res) => {
  try {
    // console.log(req.body);
    const recetaNueva = new Receta(req.body);
    // aqui quiero guardar en la BD
    await recetaNueva.save();
    res.status(201).json({ mensaje: "La receta fue creada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al crear la receta" });
  }
};

export const listarRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find().populate('categoria','nombre descripcion');
    res.status(200).json(recetas);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al listar las recetas" });
  }
};

export const obtenerRecetaPorID = async (req, res) => {
  try {
    console.log(req.params.id);
    const recetaBuscada = await Receta.findById(req.params.id).populate('categoria','nombre descripcion');
    if (!recetaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro una receta con ese ID" });
    }
    res.status(200).json(recetaBuscada);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al buscar una receta por ID" });
  }
};


export const borrarRecetaPorID = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findByIdAndDelete(req.params.id);
   
    if (!recetaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro una receta con ese ID" });
    }
    res.status(200).json({mensaje: 'La receta fue borrada correctamente'});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar borrar una receta por ID" });
  }
};

export const editarRecetaPorID = async (req, res) => {
  try {
    //deberia validar que el id exista y sea un id de mongodb
    const recetaActualizada = await Receta.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if (!recetaActualizada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro una receta con el id enviado" });
    }
    res.status(200).json({mensaje: 'La receta fue editada correctamente', receta: recetaActualizada});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar editar una receta por id" });
  }
};