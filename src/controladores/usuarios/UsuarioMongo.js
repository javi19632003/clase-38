import {ContenedorMongo} from '../../persistencias/index.js'
import { usuarios }      from "../../persistencias/schemas/usuarios.js";


class UsuarioMongo extends ContenedorMongo {
    constructor(){
        super(usuarios)
    }
}

export {UsuarioMongo}