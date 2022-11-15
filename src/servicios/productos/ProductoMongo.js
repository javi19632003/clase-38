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
     const { nombre,precio,foto } = body
     body.timestamp  = Date.now()
     if(!nombre || !precio || !foto) return {menssage:'Debe completar todos los campos'}
     const respuesta = await Persistencia.nuevoProducto(body)
     return respuesta
    }  

    async actualizarProducto (id, datos){
        try {
            const {nombre,descripcion,precio,foto} = datos
            if(!nombre || !precio || !foto) return {menssage:'Debe completar todos los campos'}
            const respuesta = await Persistencia.actualizarProducto(id, {nombre,descripcion,precio,foto})
            return respuesta 
        } catch (error) {
            console.log(error)
            return error 
        }

    }
}

export {ServicioMongo}