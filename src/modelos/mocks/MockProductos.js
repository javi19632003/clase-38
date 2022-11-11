import mongoose from "mongoose";
import { productos } from "./productos.js";


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


await creroMockProductos()

//mongoose.disconnect();



async function creroMockProductos() {
    /* -------------------------------------------------------*/
    /* ------------------------- CREATE ----------------------*/
    /* -------------------------------------------------------*/

    const productoData =[
      {"id":1,
       "timestamp":1659744410993,
       "nombre":"Cámara compacta full-frame Alpha 7C A1",
       "descripcion":"Cáma hermosa y muy buena para presentaciones profesionales",
       "precio":10200.5,
       "foto":"https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
      },
      {"id":2,
       "timestamp":1659744410993,
       "nombre":"Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38",
       "descripcion":"Cáma hermosa y muy buena",
       "precio":100.5,
       "foto":"https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
      },
      {"id":3,
       "timestamp":1659744410993,
       "nombre":"Cámara APS-C a6100 con enfoque automático rápido",
       "descripcion":"Cáma hermosa y muy buena",
       "precio":1523.15,
       "foto":"https://http2.mlstatic.com/D_NQ_NP_724054-MLA31993297383_082019-O.webp"
      },
      {"id":4,
       "timestamp":1659744410993,
       "nombre":"Cámara a6400 + SELP18105G",
       "descripcion":"Cáma hermosa y muy buena",
       "precio":4530,
       "foto":"https://http2.mlstatic.com/D_NQ_NP_842574-MLA40353899541_012020-O.webp"
      },
      {"id":5,
       "timestamp":1659744410993,
       "nombre":"a1 con una resolución y velocidad superiores",
       "descripcion":"Cáma hermosa y muy buena",
       "precio":3560,
       "foto":"./img/camara5.png"
      },
      {"id":6,
       "timestamp":1659744410993,
       "nombre":"Cámara RX100 III avanzada con sensor tipo 1.0",
       "descripcion":"Cáma hermosa y muy buena",
       "precio":4530,
       "foto":"./img/camara6.png"
      },
      {"id":7,
       "timestamp":1659744410993,
       "nombre":"por Postman Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38",
       "descripcion":"Cáma hermosa y muy buena",
       "precio":100.5,
       "foto":"https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
      },
      {"id":9,
       "timestamp":1659744410993,
       "nombre":"Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38",
       "descripcion":"Cáma hermosa y muy buena",
       "precio":100.5,
       "foto":"https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
      }
  ];

    productoData.forEach(async (producto) => {
      const productoNuevo = new productos(producto);
      await productoNuevo.save();
    });

}
