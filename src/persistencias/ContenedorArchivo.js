import config    from "../configuracion/config.js"
import * as fs   from 'fs/promises'
//import {archivo} from '../configuracion/index.js'

class ContenedorArchivo {
    constructor(nombreArchivo){
        console.log(nombreArchivo)
        this.nombreArchivo = `${config.MONGO_DB_URI}/${nombreArchivo}.json`
        console.log(this.nombreArchivo)
    }

    async mostrarTodos() {
        try {
            const archivo = await fs.readFile(this.nombreArchivo)
            const elementos = JSON.parse(archivo)
            return elementos
        } catch (error) {
            throw new Error(error)        
        }
    }

    async nuevoProducto(nuevoElemento){
        try {
            const elementos = await this.mostrarTodos()
            console.log(elementos)
            const ultimoElemento = elementos[elementos.length -1]
            console.log(ultimoElemento)
            if(ultimoElemento == undefined){
                nuevoElemento.id = 1
            }  else { 
                nuevoElemento.id  = ultimoElemento ? ultimoElemento.id + 1 : 1
            }
            elementos.push(nuevoElemento)
            console.log(elementos)
            await fs.writeFile(this.nombreArchivo, JSON.stringify(elementos))

            return nuevoElemento
        } catch (error) {
            throw new Error(error)
        }
    }

    async mostrarPorId(id){
        try {
            const elementos = await this.mostrarTodos()
            const resultado = elementos.find(elemento => elemento.id === parseInt(id))
            return resultado
        } catch (error) {
            throw new Error(error)
        }
    }

    async actualizarProducto(id, nuevaData){
        try {
            const elementos = await this.mostrarTodos()
            const elementoIndex = elementos.findIndex(elemento => elemento.id === parseInt(id))

            if(elementoIndex === -1) return {message: 'elemento no encontrado'}
            const elementoActualizado = {...elementos[elementoIndex], ...nuevaData}
            elementos[elementoIndex] = elementoActualizado

            await fs.writeFile(this.nombreArchivo, JSON.stringify(elementos))
            return elementoActualizado
        } catch (error) {
            throw new Error(error)
        }
    }

    async actualizarCarrito(nuevoElemento){
        const {id } = nuevoElemento
        let respuesta = []
        try {
            const elementos = await this.mostrarTodos()
            const elementoIndex = elementos.findIndex(elemento => elemento.id === id)
            if(elementoIndex === -1) {
                elementos.push(nuevoElemento)
                respuesta = nuevoElemento    
            } else {
                elementos.splice(elementoIndex, 1)
                elementos.push(nuevoElemento)
                respuesta = nuevoElemento    
            }  
            await fs.writeFile(this.nombreArchivo, JSON.stringify(elementos))  
            return respuesta
        } catch (error) {
            throw new Error(error)
        }
    }

    async eliminarPorId(id){
        try {
            const elementos = await this.mostrarTodos()
            const elementoIndex = elementos.findIndex(elemento => elemento.id === parseInt(id))

            if(elementoIndex === -1) return {message: 'elemento no encontrado'}

            const elementoEncontrado = elementos[elementoIndex]

            elementos.splice(elementoIndex, 1)
            await fs.writeFile(this.nombreArchivo, JSON.stringify(elementos))

            return {message: 'elemento dado de baja'}

            
        } catch (error) {
            throw new Error(error)
        }
    }

    async eliminarTodos(){
        try {
            await fs.writeFile(this.nombreArchivo, JSON.stringify([]))
        } catch (error) {
            throw new Error(error)
        }
    }
}

export {ContenedorArchivo}