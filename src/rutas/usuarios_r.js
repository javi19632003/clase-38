import config                     from "../configuracion/config.js";
import passport                   from "passport";
import jwt                        from "jsonwebtoken";
import { Router }                 from 'express'
import { ControladorUsuario }     from '../controladores/index.js'

const rutaUsuarios  = Router()
const Usuario       = new ControladorUsuario();
const PRIVATE_KEY   = config.PRIVATE_KEY;

   //serializar
passport.serializeUser(function (user, done) {
  done(null, { email : user.email,
               nombre : user.nombre,
               direccion: user.direccion
  
  });
});

//deserializar
passport.deserializeUser(async function (email1, done) {
 // const user =  await Servicio.veoUsuario(email);
 process.nextTick(function(){
    done(null, email1 );
 }) 
 
});
  
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
  console.log(req.user)
   const authHeader = req.headers.authorization;
   if (!authHeader) {
     return res.status(401).json({
       error: "not authenticated",
     });
   }
 
   const token = authHeader;
   jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
     if (err) {
       return res.status(401).json({
         error: "not authorized",
       });
     }
     next();
   });
 }

export { rutaUsuarios }