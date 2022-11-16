//import { CarritoArchivo }  from "./carrito/CarritoArchivo.js";
import { ControladorCarrito }    from "./Carrito_c.js";
//import { ProductoArchivo } from "./productos/ProductoArchivo.js";
import { ControladorProducto }   from "./Productos_c.js";
import { UsuarioMongo }    from "./usuarios/UsuarioMongo.js";

const DATABASES = {
    mongo: {
        carritoApi:   new ControladorCarrito(),
        productosApi: new ControladorProducto(),
        usuarioApi:   new UsuarioMongo()
    },
    archivo: {
//        carritoApi: new CarritoArchivo(),
//        productosApi: new ProductoArchivo()
    }
}

const DB = process.env.SELECTED_DB || 'mongo'

const {carritoApi, productosApi, usuarioApi} = DATABASES[DB]

export {carritoApi, productosApi, usuarioApi}