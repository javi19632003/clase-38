import {ContenedorMongo} from '../../persistencias/index.js'
import { carritos }      from "../../persistencias/schemas/carrito.js";


class CarritoMongo extends ContenedorMongo {
    constructor(){
        super(carritos)
    }
}

export {CarritoMongo}