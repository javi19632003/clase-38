import passport             from "passport";
import jwt                  from "jsonwebtoken";
import {ServicioUsuario}    from '../servicios/index.js'
import { Strategy }         from "passport-local";
import bcrypt               from "bcrypt";


const Servicio      = new ServicioUsuario();
const LocalStrategy = Strategy;
const PRIVATE_KEY   = "mi_token_secreto";


passport.use(
    new LocalStrategy(
      {usernameField: "email",
      passwordField: "pass"},
      async (email, pass, done) => {

      const usuario =  await Servicio.veoUsuario(email);
      if(!usuario) return done(null, false);

      console.log(usuario) 
      console.log(pass)
      console.log(usuario.pass)
      const comparo = await bcrypt.compare(pass, usuario.pass).then(function(comparado){
          return comparado
      });
      
      console.log(comparo);
      if(!comparo)return done(null, false);
     done(null, usuario); 
    })
  );


  //serializar
passport.serializeUser(function (user, done) {
    done(null, user.email);
  });
  
  //deserializar
  passport.deserializeUser(async function (email, done) {
    const user =  await Servicio.veoUsuario(email);
    done(null, user );
  });
  

class ControladorUsuario {
    constructor(){
    }
 
    async veoUsuario (req, res){
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
    }

}

export {ControladorUsuario}