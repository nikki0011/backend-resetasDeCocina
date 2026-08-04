import Categoria from "../models/categoria.js";

export const crearCategoria = async (req, res) => {
  try {
    //todo: agregar el middlware para validar los datos del body
    const categoriaNueva = new Categoria(req.body);
    await categoriaNueva.save();
    res.status(201).json({ mensaje: "se creo la categoria correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Se produjo un error al crear una categoria" });
  }
};

export const listarCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.status(200).json(categorias)
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Se produjo un error al listar las categorias" });
  }
}

export const obtenerCategoriasPorID = async (req, res) => {
  try {
    console.log(req.params.id);
    const categoriaBuscada = await Categoria.findById(req.params.id)
    if (!categoriaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro una categoria con ese ID" });
    }
    res.status(200).json(categoriaBuscada);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al buscar una categoria por ID" });
  }
};

export const borrarCategoriaPorID = async (req, res) => {
  try {
    const categoriaBuscada = await Categoria.findByIdAndDelete(req.params.id);
   
    if (!categoriaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro una categoria con ese ID" });
    }
    res.status(200).json({mensaje: 'La categoria fue borrada correctamente'});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar borrar una categoria por ID" });
  }
};


export const editarCategoriaPorID = async (req, res) => {
  try {
    //deberia validar que el id exista y sea un id de mongodb
    const categoriaBuscada = await Categoria.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if (!categoriaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro una categoria con el id enviado" });
    }
    res.status(200).json({mensaje: 'La categoria fue editado correctamente', Categoria: categoriaBuscada});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar editar una categoria por id" });
  }
};
