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

    async mostrarPorCategoria (req, res){
        try {
            const producto = await Servicio.mostrarPorCategoria(req.params.categoria)
            if (producto.length > 0) {
                res.json(producto)
            } else {
                res.json({message: 'No hay Productos para esa Categoria'})
            }    
        } catch (error) {
            res.json(error)
        }
    
    }

    async nuevoProducto (req, res){
       
        try {
            const { nombre,precio,foto } = req.body
            console.log('llegue a nuevo producto de controlador')
            if(!nombre || !precio || !foto) res.json({menssage:'Debe completar todos los campos'})
            const producto = await Servicio.nuevoProducto(req.body)
            res.json(producto) 
        } catch (error) {
            res.json(error)
        }
    
    }

    async actualizarProducto (req, res){
        try {
            const {id} = req.params
            const {nombre,precio,foto} = req.body
            if(!nombre || !precio || !foto) res.json( {menssage:'Debe completar todos los campos'})
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