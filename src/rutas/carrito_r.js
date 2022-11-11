import { Router }                   from "express"
import { carritoApi, productosApi } from "../controladores/index.js"

const rutaCarrito = Router()


rutaCarrito.get('/:id?', async (req, res) => {
    try {
        const {id} = req.params
        if(id){
            const respuesta = await carritoApi.mostrarPorId(id)   
            if(!respuesta) return res.json({message: 'Carrito no encontrado'})
            res.json(respuesta)
        } else {
            const carritos = await carritoApi.mostrarTodos()
            res.json(carritos)
        }
    } catch (error) {
        res.json(error)
    }
})


rutaCarrito.post('/', async (req, res) => {
    try {
        const { id, productos } = req.body
        const carrito = await carritoApi.actualizarCarrito({id, productos})

        res.json(carrito)
    } catch (error) {
        res.json(error)
    }
})


rutaCarrito.delete('/:id?', async (req, res) => {
    try {
        const {id} = req.params
        const respuesta = await carritoApi.eliminarPorId(id)   
        res.json(respuesta)
    } catch (error) {
        res.json(error)
    }
})

export {rutaCarrito}