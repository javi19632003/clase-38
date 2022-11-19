import dotenv               from "dotenv";
import express              from "express";
import session              from "express-session";
import passport             from "passport";
//import bcrypt               from "bcrypt";
//import { Strategy }         from "passport-local";
import {ControladorUsuario} from './controladores/Usuarios_c.js'
import {rutaCarrito, rutaProductos, rutaUsuarios } from './rutas/index.js'

dotenv.config();
const Usuario       = new ControladorUsuario();
const app           = express();
const PORT          = process.env.PORT || 8080
//const LocalStrategy = Strategy;
const PRIVATE_KEY   = "mi_token_secreto";

/*============================[Middlewares]============================*/
app.use(express.json())

app.use(
  session({
    secret: PRIVATE_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());


/*
//serializar
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//deserializar
passport.deserializeUser(function (id, done) {
  done(null, user );
});
*/
/*============================[Rutas]==================================*/
app.use('/api/productos', rutaProductos)
app.use('/api/carrito', rutaCarrito)
app.use('/api/usuarios', rutaUsuarios)



app.get("/protected", auth, (req, res) => {
  res.send("Estoy en /protected");
});
/*=====================================================================*/

const server = app.listen(PORT, () => {
    console.log(`server funcionando en port http://localhost:${PORT}`);
  });
  server.on("error", (err) => console.error(err));
  

/*=====================================================================*/


function auth(req, res, next) {
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
    if (err) {
      return res.status(401).json({
        error: "not authorized",
      });
    }
    req.user = decoded.data;
    next();
  });
}
