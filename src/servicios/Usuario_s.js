import config                               from "../configuracion/config.js";
import { usuarios }                         from "../persistencias/schemas/usuarios.js";
import {ContenedorMongo, ContenedorArchivo} from '../persistencias/index.js'
import { transporter }                      from '../configuracion/configmail.js';

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
        if(usuario.email){
            const mimail = {
               from : 'camilla.gleichner@ethereal.email',
               to: usuario.email,
               subject: 'Alta de Usuario',
               html: `<h3> HOLA!!!!  </h3><br> 
                      <h5> ${usuario.nombre} ya eres parte de nuestra comunidad </h5 `
         }
            const mando = await transporter.sendMail(mimail);
            console.log(mando.messageId)
        }
        return usuario 
        //? usuario : {message: 'no existe'}
     }
}

export {ServicioUsuario}