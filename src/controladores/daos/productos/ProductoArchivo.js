//import { ContenedorArchivo } from "../../db/ContenedorArchivo.js"
import { ContenedorArchivo } from "../../../modelos/index.js"


class ProductoArchivo extends ContenedorArchivo {
    constructor(){
        super('productos')
    }
}

export {ProductoArchivo}