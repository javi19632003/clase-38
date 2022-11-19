import passport                 from "passport";
//import jwt                      from "jsonwebtoken";
import dotenv                   from "dotenv";
import {Router}                 from 'express'
import {ControladorUsuario}     from '../controladores/index.js'

dotenv.config();
const rutaUsuarios  = Router()
const Usuario       = new ControladorUsuario();
const PRIVATE_KEY   = process.env.PRIVATE_KEY || "mi_token_secreto";

/*----------- Session -----------*/  



// Login del usuario 
rutaUsuarios.post('/login',  passport.authenticate("local"), Usuario.veoUsuario);

// Registro de un nuevo usuario 
rutaUsuarios.post('/registro',  Usuario.nuevoUsuario);

// Deslogueo del usuario
rutaUsuarios.get('/logout',  Usuario.logout);
/*
  rutaUsuarios.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(req.user);
    const { email, nombre } = req.user;
    
    const userForToken = {
      email,
      nombre,
    };
    const token = jwt.sign(userForToken, PRIVATE_KEY);
    
    res.json({
      token,
    });

  });
  
  rutaUsuarios.post("/registro", async (req, res) => {
    console.log(req.body)

    const respuesta = await usuarioApi.nuevoUsuario(req.body)
    
    res.json(respuesta)
   

  });

*/

export {rutaUsuarios}