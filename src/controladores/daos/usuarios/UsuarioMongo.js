import {ContenedorMongo} from '../../../modelos/index.js'
import { usuarios }      from "../../../modelos/schemas/usuarios.js";


class UsuarioMongo extends ContenedorMongo {
    constructor(){
        super(usuarios)
    }
}

export {UsuarioMongo}