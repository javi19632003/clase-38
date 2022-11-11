import { ContenedorArchivo } from "../../persistencias/index.js"


class ProductoArchivo extends ContenedorArchivo {
    constructor(){
        super('productos')
    }
}

export {ProductoArchivo}