import passport             from "passport";
import jwt                  from "jsonwebtoken";
import {ServicioUsuario}    from '../servicios/index.js'
import { Strategy }         from "passport-local";
import bcrypt               from "bcrypt";
import config               from "../configuracion/config.js";


const Servicio      = new ServicioUsuario();
const LocalStrategy = Strategy;


passport.use(
    new LocalStrategy(
      {usernameField: "email",
      passwordField: "pass"},
      async (email, pass, done) => {

      const usuario =  await Servicio.veoUsuario(email);
      if(!usuario) return done(null, false);

      if (!isNaN(email)) {
        email = email.toString()
      }
      if (!isNaN(pass)) {
        pass = pass.toString()
      }
      const comparo = await bcrypt.compare(pass, usuario.pass).then(function(comparado){
          return comparado
      });
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
        const { email, nombre } = req.user;
        if (!isNaN(email)) {
          email = email.toString()
        }

        const userForToken = {
          email,
          nombre,
        };
        const token = jwt.sign(userForToken, config.PRIVATE_KEY);
        
        res.json({
          token,
        });
    }

    async nuevoUsuario (req, res){
     
      const { email, nombre, direccion, telefono, pass, edad, foto} = req.body
      if(!email || !nombre || !direccion || !telefono || !pass || !edad || !foto)
       return res.json({menssage:'Debe completar todos los campos'})

      const respuesta = await Servicio.nuevoUsuario(req.body)
      
      res.json(respuesta)
  }

  //Ruta para cerrar la sesión

  async logout (req, res){
    req.logout();
    //res.redirect('/login');
    res.json({menssage:'Usuario deslogueado'})
  
  }



}

export {ControladorUsuario}