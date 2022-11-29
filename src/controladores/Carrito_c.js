import { ServicioCarrito } from '../servicios/index.js'
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

    async mostrarTodos (req, res){
        try {
            const productos = await Servicio.mostrarTodos()
            res.json(productos) 
        } catch (error) {
            res.json(error)
        }
    }

    async actualizarCarrito (req, res){
        try {
            const { id, productos } = req.body
            const carrito = await Servicio.actualizarCarrito({id, productos})
            res.json(carrito)
        } catch (error) {
            res.json(error)
        }
    }

    async eliminarPorId (req, res){
        try {
            const {id} = req.params
            const respuesta = await Servicio.eliminarPorId(id)   
            res.json(respuesta)
        } catch (error) {
            res.json(error)
        }
    }


}

export { ControladorCarrito }