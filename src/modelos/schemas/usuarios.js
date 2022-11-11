import mongoose from "mongoose";

const usuariosCollection = "usuarios";

const usuariosSchema = new mongoose.Schema({
  email: { type: String, required: true, max: 100, unique: true },
  nombre: { type: String, required: true, max: 80 },
  direccion: { type: String, required: true, max: 80 },
  telefono: { type: String, required: true, max: 25 },
  pass: { type: String, required: true, max: 25 },
  edad: { type: Number, required: true },
  foto: { type: String, required: true, max: 150 },
}, {
  versionKey: false 
});


export const usuarios = mongoose.model(
  usuariosCollection,
  usuariosSchema
);
