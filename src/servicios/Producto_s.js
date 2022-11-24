import config                               from "../configuracion/config.js";
import { productos }                        from "../persistencias/schemas/productos.js";
import {ContenedorMongo, ContenedorArchivo} from '../persistencias/index.js'



const Persistencia =  config.SELECTED_DB == "mongo" ?
new ContenedorMongo(productos) : new ContenedorArchivo('productos');


class ServicioProducto {
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
     const respuesta = await Persistencia.nuevoProducto(body)
     return respuesta
    }  

    async actualizarProducto (id, datos){
        try {
            const {nombre,descripcion,precio,foto} = datos
            const respuesta = await Persistencia.actualizarProducto(id, {nombre,descripcion,precio,foto})
            return respuesta 
        } catch (error) {
            console.log(error)
            return error 
        }

    }


    async eliminarPorId(id){
        try {
            const elementoeliminado = await Persistencia.eliminarPorId(id)
            return elementoeliminado
        } catch (error) {
            throw new Error(error)
        }
    }

}

export {ServicioProducto}