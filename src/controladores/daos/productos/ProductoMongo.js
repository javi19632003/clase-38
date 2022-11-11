import {ContenedorMongo} from '../../../modelos/index.js'
import { productos }     from "../../../modelos/schemas/productos.js";

class ProductoMongo extends ContenedorMongo {
    constructor(){
        super(productos)
    }
}

export {ProductoMongo}