import config               from "./configuracion/config.js";
import express              from "express";
import session              from "express-session";
import passport             from "passport";
import cors                 from "cors";

import {ControladorUsuario} from './controladores/Usuarios_c.js'
import {rutaCarrito, rutaProductos, rutaUsuarios } from './rutas/index.js'

const Usuario       = new ControladorUsuario();
const app           = express();

/*============================[Middlewares]============================*/
app.use(express.static('public'))
app.use(express.json())

app.use(
  session({
    secret: config.PRIVATE_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

if(config.NODE_ENV == 'produccion') app.use(cors());


/*============================[Rutas]==================================*/

app.get("/", (req, res) => {
  res.redirect('/api/productos');
});

app.use('/api/productos', rutaProductos)
app.use('/api/carrito', rutaCarrito)
app.use('/api/usuarios', rutaUsuarios)




/*=====================================================================*/

const server = app.listen(config.PORT, () => {
    console.log(`server funcionando en el PUERTO: ${config.PORT}, en MODO: ${config.NODE_ENV}, PERSISTENCIA: ${config.SELECTED_DB}  `);
  });
  server.on("error", (err) => console.error(err));
  

