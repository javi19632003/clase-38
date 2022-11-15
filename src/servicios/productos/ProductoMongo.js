import { productos }     from "../../persistencias/schemas/productos.js";
import {ContenedorMongo} from '../../persistencias/index.js'

const Persistencia = new ContenedorMongo(productos);

class ServicioMongo {
    constructor(){
    }

    async mostrarPorId (id){
      console.log("estoy en servicio")
      console.log(id)
       const producto = await Persistencia.mostrarPorId(id)
       return producto ? producto : {message: 'Producto no encontrado'}
    }

    async mostrarTodos(){
      console.log("mostrar todos servico")
        return await Persistencia.mostrarTodos()
     }
 

}

export {ServicioMongo}