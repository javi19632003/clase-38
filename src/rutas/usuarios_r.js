import config                     from "../configuracion/config.js";
import passport                   from "passport";
import jwt                        from "jsonwebtoken";
import { Router }                 from 'express'
import { ControladorUsuario }     from '../controladores/index.js'

const rutaUsuarios  = Router()
const Usuario       = new ControladorUsuario();
const PRIVATE_KEY   = config.PRIVATE_KEY;

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
  console.log(req.session)
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

export { rutaUsuarios }