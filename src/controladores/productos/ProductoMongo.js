import {ServicioMongo} from '../../servicios/productos/ProductoMongo.js'

const persistencia = new ServicioMongo();

class ProductoMongo {
    constructor(){

    }

    async mostrarPorId (req, res){
        console.log(req.id)
        try {
            const {id} = req.params
            if(id){
                const producto = await persistencia.mostrarPorId(id)
                return producto ? res.json(producto) : res.json({message: 'Producto no encontrado'})
            }
            console.log("aca estoy")
            const productos = await persistencia.mostrarTodos()
            console.log(productos)
            res.json(productos) 
        } catch (error) {
            res.json(error)
        }
    
    }



}

export {ProductoMongo}