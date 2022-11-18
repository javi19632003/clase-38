import { Router }             from "express"
import { ControladorCarrito } from "../controladores/index.js"

const rutaCarrito = Router()
const Carrito     = new ControladorCarrito();


// Mostrar Todos los carritos 
rutaCarrito.get('/', Carrito.mostrarTodos);


// Mostrar un carrito segùn su email 
rutaCarrito.get('/:id?', Carrito.mostrarPorId);

// Actualiza un Carrito 
rutaCarrito.post('/', Carrito.actualizarCarrito);

// Borrar Carrito 
rutaCarrito.delete('/:id?', Carrito.eliminarPorId);


/*
rutaCarrito.delete('/:id?', async (req, res) => {
    try {
        const {id} = req.params
        const respuesta = await carritoApi.eliminarPorId(id)   
        res.json(respuesta)
    } catch (error) {
        res.json(error)
    }
})
*/
export {rutaCarrito}