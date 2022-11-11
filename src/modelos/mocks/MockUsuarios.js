import mongoose from "mongoose";
import { usuarios } from "../schemas/usuarios.js";

// pass es "HolaTito"

try {
  mongoose.connect(
    "mongodb+srv://ajn:LaEncontre@cluster0.2sqrs.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
} catch (e) {
  console.log(e);
}

console.log("conectado")


await creroMockUsuarios()

//mongoose.disconnect();


async function creroMockUsuarios() {
    /* -------------------------------------------------------*/
    /* ------------------------- CREATE ----------------------*/
    /* -------------------------------------------------------*/

    const usuariosData =[
      {
       "email":"anicolas@gmail.com",
       "nombre":"Alejandro Javier Nicolás",
       "direccion":"Davila 870,  CABA",
       "telefono":"+541120344566",
       "pass":"$2b$10$T0xFNZWLEWGM3sNqfyAMi.aIdLQ.4wgOUHnnwUn.ehqdSFxaIl1IK",
       "edad": 59,
       "foto":"https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
      },
      {
      "email":"falonzo@gmail.com",
      "nombre":"Fernando Alonzo",
      "direccion":"Lauraro 710 Piso 1 Dto A, CABA",
      "telefono":"+541133749955",
      "pass":"$2b$10$usGpEbIUDs9fEkjOQnTdsOgg6tA1xGyGMlR77U8VeVP2aPzg1Xk.K",
      "edad": 39,
      "foto":"https://http2.mlstatic.com/D_NQ_NP_55456667LA31993704014_082019-O.webp"
     }
  ];

    usuariosData.forEach(async (usuario) => {
      console.log(usuario)
      const usuarioNuevo = new usuarios(usuario);
      await usuarioNuevo.save();
    });

    process.exit; 

}
