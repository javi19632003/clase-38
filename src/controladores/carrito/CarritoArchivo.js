import { ContenedorArchivo } from '../../persistencias/index.js'


class CarritoArchivo extends ContenedorArchivo {
    constructor(){
        super('carritos')
    }
}

export {CarritoArchivo}