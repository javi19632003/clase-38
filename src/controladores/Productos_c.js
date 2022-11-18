import {ServicioProducto} from '../servicios/index.js'

const Servicio = new ServicioProducto();

class ControladorProducto {
    constructor(){

    }

    async mostrarTodos (req, res){
        try {
            const productos = await Servicio.mostrarTodos()
            res.json(productos) 
        } catch (error) {
            res.json(error)
        }
    }

    async mostrarPorId (req, res){
        try {
            const producto = await Servicio.mostrarPorId(req.params.id)
           return producto ? res.json(producto) : res.json({message: 'Producto no encontrado'})
        } catch (error) {
            res.json(error)
        }
    
    }

    async nuevoProducto (req, res){
        try {
            const producto = await Servicio.nuevoProducto(req.body)
            res.json(producto) 
        } catch (error) {
            res.json(error)
        }
    
    }

    async actualizarProducto (req, res){
        try {
            const {id} = req.params
            const respuesta = await Servicio.actualizarProducto(id, req.body)
            res.json(respuesta) 
        } catch (error) {
            res.json(error)
        }
    
    }

    async eliminarPorId (req, res){
        try {
            const {id} = req.params
            if(id){
                 const respuesta = await Servicio.eliminarPorId(id)
                 res.json(respuesta)
            }    
        } catch (error) {
            res.json(error)
        }
    
    }


}

export {ControladorProducto}