import {ServicioMongo} from '../../servicios/productos/ProductoMongo.js'

const Servicio = new ServicioMongo();

class ProductoMongo {
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
        console.log("estoy en controlador")
        console.log(req.params.id)
        try {
            console.log("voy a mostrar ....")
            const producto = await Servicio.mostrarPorId(req.params.id)
            console.log(producto)
           return producto ? res.json(producto) : res.json({message: 'Producto no encontrado'})
        } catch (error) {
            res.json(error)
        }
    
    }



}

export {ProductoMongo}