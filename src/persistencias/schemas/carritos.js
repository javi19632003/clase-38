import mongoose from "mongoose";

const carritoCollection = "carritos";

const carritoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  productos: [
    {
        idProducto: Number,
        cantidad: Number,
        preuni: Number
    }
],
 
}, {
  versionKey: false 
});

export const carritos = mongoose.model(
  carritoCollection,
  carritoSchema
);
