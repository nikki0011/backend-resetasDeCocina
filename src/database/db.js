import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.info("Conexion exitosa a la BD exitosa");
  } catch (error) {
    console.error(error);
  }
};

conectarDB();
