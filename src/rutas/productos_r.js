import {Router}       from 'express'
import {productosApi} from '../controladores/index.js'

const rutaProductos = Router()



// Mostrar todos los productos
rutaProductos.get('/', productosApi.mostrarTodos);

// Mostrar solo producto según su id
rutaProductos.get('/:id?', productosApi.mostrarPorId);

// Dar de alta un nuevo producto
rutaProductos.post('/', productosApi.nuevoProducto);
// Modificar un producto existente
rutaProductos.put('/:id', productosApi.actualizarProducto);


/*
rutaProductos.put('/:id', async (req, res) => {
    const {id} = req.params
    const {nombre,descripcion,precio,foto} = req.body
    const respuesta = await productosApi.actualizarProducto(id, {nombre,descripcion,precio,foto})

    res.json(respuesta)
})
*/

// Borrar Un Producto 
rutaProductos.delete('/:id', async (req,res) => {
   const {id} = req.params
   if(id){
        const respuesta = await productosApi.eliminarPorId(id)
        res.json(respuesta)
    }
})

export {rutaProductos}