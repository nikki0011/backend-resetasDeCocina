import mongoose, { Schema } from "mongoose";

const ResetaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 100,
      trim: true,
    },
    imagen: {
      type: String,
      required: true,
      validate: {
        validator: (valor) => {
          /^https:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)$/.test(valor);
        },
      },
    },
    categoria: {
      type: String,
      required: true,
      enum: ['Desayuno', 'Almuerzo','Merienda', 'Cena']
    },
    descripcion: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 500
    },
  },
  {
    timestamps: true,
  },
);

const Receta =  mongoose.model('receta',RecetaSchema)

export default Receta
