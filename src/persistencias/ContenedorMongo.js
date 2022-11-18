import dotenv                   from "dotenv";
import mongoose                 from "mongoose";

dotenv.config();

if (process.env.SELECTED_DB == "mongo"){
    try {
        mongoose.connect( 
            process.env.MONGO_DB_URI,
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            }
           
        )  
        console.log("conectado")
    } catch (error) {
        throw new Error(error)        
    }
}

class ContenedorMongo {
    constructor(nombreColeccion){
        this.coleccion = nombreColeccion  
    }

/*   Funciones Generales */

    async mostrarTodos() {
        const docs = await this.coleccion.find();
        return docs 
     }

   
    async mostrarPorId(id){
        try {
            const resultado = await this.coleccion.findOne({id: id})
            return resultado
        } catch (error) {
            console.log(error)
            return {message: 'Error inesperado en mostrarPorId'}
        }
    }

    async eliminarPorId(id){
        try {
            const elementoeliminado = await this.coleccion.deleteOne({id: id})
            if(elementoeliminado.deletedCount == 1) return {message: 'Producto dado de baja'}
            return {message: 'Producto no encontrado'}
    
        } catch (error) {
            console.log(error)
            return {message: 'Error inesperado en eliminarPorId'}

        }
    }

/*   Funciones solo de usuarios  */

    async veoUsuario(email){
        try {
            const resultado = await this.coleccion.findOne({email: email})
            return resultado
        } catch (error) {
            return error
        }
    }

    async nuevoUsuario(nuevoElemento){
        try {
            const nuevo  = new this.coleccion(nuevoElemento)
            const err    = await nuevo.save().catch(err => err);
            if (!err.email){
                return {menssage : "No se dió de alta el Usuario"};     
            }  else {
                return err 
            }

        } catch (error) {
            throw new Error(error)
        }
    }



/*   Funciones solo de Carrito */

    async actualizarCarrito(nuevoElemento){
        const nuevo = new this.coleccion(nuevoElemento)
        const resultado = await this.coleccion.findOne({id: nuevo.id})
        if (!resultado){
            const err = await nuevo.save().catch(err => err);
            if (!err.id){
                return {menssage : "No se dió de alta el Carrito"};     
            }  else {
                return err 
            }
        } else {
            const err = await this.coleccion.findOneAndUpdate({id:nuevo.id}, {productos: nuevo.productos},
                {returnOriginal : false});
            return err 
        }
    }

/*   Funciones solo de Productos */

    async nuevoProducto(nuevoElemento){
        try {
            const maximo = await this.coleccion.find().sort({id: -1}).limit(1);
            nuevoElemento.id = maximo[0].id+1
            const nuevo  = new this.coleccion(nuevoElemento)
            const err    = await nuevo.save().catch(err => err);
            if (!err.id){
                return {menssage : "No se actualizó el Producto"};     
            }  else {
                return err 
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async actualizarProducto(id, nuevaData){
        console.log(id)
        console.log(nuevaData)
        try {
            const elementoActualizado = this.coleccion.findOneAndUpdate({id:id}, {$set: nuevaData},
                {returnOriginal : false})
            console.log(elementoActualizado)    
            return elementoActualizado
        } catch (error) {
            throw new Error(error)
        }
    }


}



export {ContenedorMongo}