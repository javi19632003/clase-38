import {Router} from 'express'
import {productosApi} from '../controladores/index.js'

const rutaProductos = Router()

// Mostrar todos o un solo producto según su id
rutaProductos.get('/:id?', async (req, res) => {
    try {
        const {id} = req.params
        if(id){
            const producto = await productosApi.mostrarPorId(id)
            return producto ? res.json(producto) : res.json({message: 'Producto no encontrado'})
        }
        const productos = await productosApi.mostrarTodos()
        res.json(productos) 
    } catch (error) {
        res.json(error)
    }

})

// Dar de alta un nuevo producto
rutaProductos.post('/', async (req, res) => {
    const { id,nombre,descripcion,precio,foto } = req.body
    const timestamp  = Date.now()
    if(!nombre || !precio || !foto) return res.json({menssage:'Debe completar todos los campos'})

    const respuesta = await productosApi.nuevoProducto({id,timestamp,nombre,descripcion,precio,foto})
    
    res.json(respuesta)
   
    
})

// Modificar un producto existente
rutaProductos.put('/:id', async (req, res) => {
    const {id} = req.params
    const {nombre,descripcion,precio,foto} = req.body
    const respuesta = await productosApi.actualizarProducto(id, {nombre,descripcion,precio,foto})

    res.json(respuesta)
})


// Borrar Un Producto 
rutaProductos.delete('/:id', async (req,res) => {
   const {id} = req.params
   if(id){
        const respuesta = await productosApi.eliminarPorId(id)
        res.json(respuesta)
    }
})

export {rutaProductos}