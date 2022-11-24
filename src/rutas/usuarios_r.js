import passport                 from "passport";
import jwt                      from "jsonwebtoken";
import dotenv                   from "dotenv";
import {Router}                 from 'express'
import {ControladorUsuario}     from '../controladores/index.js'

dotenv.config();
const rutaUsuarios  = Router()
const Usuario       = new ControladorUsuario();
const PRIVATE_KEY   = process.env.PRIVATE_KEY || "mi_token_secreto";

// Login del usuario 
rutaUsuarios.post('/login',  passport.authenticate("local"), Usuario.veoUsuario);

// Registro de un nuevo usuario 
rutaUsuarios.post('/registro',  Usuario.nuevoUsuario);

// Deslogueo del usuario
rutaUsuarios.get('/logout',   Usuario.logout);


rutaUsuarios.post("/pro", auth, (req, res) => {
  res.send("Estoy en /protected");
});


function auth(req, res, next) {
  console.log(req.isAuthenticated())
   const authHeader = req.headers.authorization;
   console.log("authHeader");
   console.log(authHeader);
   if (!authHeader) {
     return res.status(401).json({
       error: "not authenticated",
     });
   }
 
   const token = authHeader;
   console.log(token);
   jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
    console.log(decoded)
     if (err) {
       return res.status(401).json({
         error: "not authorized",
       });
     }
     req.user = decoded.data;
     console.log(req.user)
     next();
   });
 }

export {rutaUsuarios}