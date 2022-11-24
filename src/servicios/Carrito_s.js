import config                               from "../configuracion/config.js";
import { carritos }                         from "../persistencias/schemas/carritos.js";
import {ContenedorMongo, ContenedorArchivo} from '../persistencias/index.js'


const Persistencia =  config.SELECTED_DB == "mongo" ?
new ContenedorMongo(carritos) : new ContenedorArchivo('carritos');


class ServicioCarrito {
    constructor(){
    }

    async mostrarTodos(){
        return await Persistencia.mostrarTodos()
     }

    async mostrarPorId (id){
        try {
            const respuesta = await Persistencia.mostrarPorId(id)   
            if(!respuesta) return {message: 'Carrito no encontrado'}
            return respuesta
        } catch (error) {
            console.log(error)
            return error 
        }
    
    }

    async actualizarCarrito (dato){
        try {
            const { id, productos } = dato
            const carrito = await Persistencia.actualizarCarrito({id, productos})
            return carrito
        } catch (error) {
            console.log(error)
            return error 
        }
    
    }

    async eliminarPorId (id){
        try {
            const respuesta = await Persistencia.eliminarPorId(id)   
            return respuesta
        } catch (error) {
            console.log(error)
            return error 
        }
    }

}

export {ServicioCarrito}