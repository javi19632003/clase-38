import { CarritoArchivo }  from "./daos/carrito/CarritoArchivo.js";
import { CarritoMongo }    from "./daos/carrito/CarritoMongo.js";
import { ProductoArchivo } from "./daos/productos/ProductoArchivo.js";
import { ProductoMongo }   from "./daos/productos/ProductoMongo.js";
import { UsuarioMongo }    from "./daos/usuarios/UsuarioMongo.js";

const DATABASES = {
    mongo: {
        carritoApi: new CarritoMongo(),
        productosApi: new ProductoMongo(),
        usuarioApi: new UsuarioMongo()
    },
    archivo: {
        carritoApi: new CarritoArchivo(),
        productosApi: new ProductoArchivo()
    }
}

const DB = process.env.SELECTED_DB || 'mongo'

const {carritoApi, productosApi, usuarioApi} = DATABASES[DB]

export {carritoApi, productosApi, usuarioApi}