import {ContenedorMongo} from '../../../modelos/index.js'
import { carritos }      from "../../../modelos/schemas/carrito.js";


class CarritoMongo extends ContenedorMongo {
    constructor(){
        super(carritos)
    }
}

export {CarritoMongo}