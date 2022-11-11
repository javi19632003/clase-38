import { productos }     from "../../persistencias/schemas/productos.js";
import {ContenedorMongo} from '../../persistencias/index.js'

const persistencia = new ContenedorMongo(productos);

class ServicioMongo {
    constructor(){
    }

    async mostrarPorId (id){
       const producto = await persistencia.mostrarPorId(id)
       return producto ? producto : {message: 'Producto no encontrado'}
    }

    async mostrarTodos(){
        return await persistencia.mostrarTodos()
     }
 

}

export {ServicioMongo}