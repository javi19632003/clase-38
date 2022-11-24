import config                               from "../configuracion/config.js";
import { usuarios }                         from "../persistencias/schemas/usuarios.js";
import {ContenedorMongo, ContenedorArchivo} from '../persistencias/index.js'


const Persistencia =  config.SELECTED_DB == "mongo" ?
new ContenedorMongo(usuarios) : new ContenedorArchivo('usuarios');


class ServicioUsuario {
    constructor(){
    }

    async veoUsuario (email){
        const usuario = await Persistencia.veoUsuario(email)
        return usuario 
        //? usuario : {message: 'no existe'}
     }

     async nuevoUsuario (nuevo){
        const usuario = await Persistencia.nuevoUsuario(nuevo)
        return usuario 
        //? usuario : {message: 'no existe'}
     }
}

export {ServicioUsuario}