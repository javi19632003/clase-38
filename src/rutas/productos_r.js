import {Router}              from 'express'
import {ControladorProducto} from '../controladores/index.js'

const rutaProductos = Router()
const Producto      = new ControladorProducto();


// Mostrar todos los productos
rutaProductos.get('/', Producto.mostrarTodos);

// Mostrar solo producto según su id
rutaProductos.get('/:id?', Producto.mostrarPorId);

// Mostrar por categoria
rutaProductos.get('/cate/:categoria?', Producto.mostrarPorCategoria);

// Dar de alta un nuevo producto
rutaProductos.post('/', Producto.nuevoProducto);

// Modificar un producto existente
rutaProductos.put('/:id', Producto.actualizarProducto);

// Borrar Un Producto 
rutaProductos.delete('/:id', Producto.eliminarPorId);


export {rutaProductos}