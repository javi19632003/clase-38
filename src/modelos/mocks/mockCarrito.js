import mongoose from "mongoose";
import { carritos } from "./carrito.js";

CRUD();

async function CRUD() {
  try {
    mongoose.connect(
      "mongodb+srv://ajn:LaEncontre@cluster0.2sqrs.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado a MongoDB");

    /* -------------------------------------------------------*/
    /* ------------------------- CREATE ----------------------*/
    /* -------------------------------------------------------*/

    console.log("CREATE");
    const carritoData =[
        {"id":"Alejandro",
         "productos":[],
        }
  ];

    carritoData.forEach(async (carrito) => {
      const carritoNuevo = new carritos(carrito);
      await carritoNuevo.save();
    });

    //Producto.insertMany(productoData, (error, docs) => {
      //   if (error) {
      //       console.log(error);
      //   } else {
      //       console.log(docs);
      //   }
    // });

    // mongoose.disconnect();
  } catch (e) {
    console.log(e);
  }
}
