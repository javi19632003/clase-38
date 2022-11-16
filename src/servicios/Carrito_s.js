import dotenv                               from "dotenv";
import { carritos }                         from "../persistencias/schemas/carritos.js";
import {ContenedorMongo, ContenedorArchivo} from '../persistencias/index.js'

dotenv.config();

const Persistencia =  process.env.SELECTED_DB == "mongo" ?
new ContenedorMongo(carritos) : new ContenedorArchivo('carritos');


class ServicioCarrito {
    constructor(){
    }


}

export {ServicioCarrito}