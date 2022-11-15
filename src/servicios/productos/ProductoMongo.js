import { productos }     from "../../persistencias/schemas/productos.js";
import {ContenedorMongo} from '../../persistencias/index.js'

const Persistencia = new ContenedorMongo(productos);

class ServicioMongo {
    constructor(){
    }

    async mostrarPorId (id){
       const producto = await Persistencia.mostrarPorId(id)
       return producto ? producto : {message: 'Producto no encontrado'}
    }

    async mostrarTodos(){
        return await Persistencia.mostrarTodos()
     }

     async nuevoProducto(body){
     const { id,nombre,descripcion,precio,foto } = body
     body.timestamp  = Date.now()
     if(!nombre || !precio || !foto) return res.json({menssage:'Debe completar todos los campos'})
     const respuesta = await Persistencia.nuevoProducto(body)
     console.log(respuesta)
     return respuesta
    }  
}

export {ServicioMongo}