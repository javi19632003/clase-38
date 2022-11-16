//import {ContenedorMongo} from '../persistencias/index.js'
//import { carritos }      from "../persistencias/schemas/carritos.js";
import {ServicioCarrito} from '../servicios/Carrito_s.js'

const Servicio = new ServicioCarrito();

class ControladorCarrito {
    constructor(){
    }
    async mostrarPorId (req, res){
        try {
            const producto = await Servicio.mostrarPorId(req.params.id)
           return producto ? res.json(producto) : res.json({message: 'Producto no encontrado'})
        } catch (error) {
            res.json(error)
        }
    
    }




}

export {ControladorCarrito}