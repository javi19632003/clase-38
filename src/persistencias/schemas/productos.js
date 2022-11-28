import mongoose from "mongoose";

const productosCollection = "productos";

const productosSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  categoria: { type: String, required: true, max: 80},
  nombre: { type: String, required: true, max: 100 },
  descripcion: { type: String, required: true, max: 100 },
  precio: { type: Number, required: true },
  foto: { type: String, required: true, max: 100 },
}, {
  versionKey: false 
});


export const productos = mongoose.model(
  productosCollection,
  productosSchema
);
