import config                                       from "./configuracion/config.js";
import express                                      from "express";
import session                                      from "express-session";
import passport                                     from "passport";
import cors                                         from "cors";
import { rutaCarrito, rutaProductos, rutaUsuarios } from './rutas/index.js'


const app           = express();


/*============================[Middlewares]============================*/

app.use(express.json())

app.use(
  session({
    secret: config.PRIVATE_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: Number(config.SESSION_MAX) },
  })
);

app.use(passport.initialize());
app.use(passport.session());

if(config.NODE_ENV == 'produccion') app.use(cors());

app.set("views", "./src/views");
app.set("view engine", "pug");

/*============================[Rutas]==================================*/

app.get("/", (req, res) => {
  res.redirect('/api/productos');
});

app.get("/config", function (req, res) {
  res.render("config.pug", {
    titleTable: "Configuracion del Servidor",
    Modo: config.NODE_ENV,
    Puerto: config.PORT,
    Persis: config.SELECTED_DB,
    Correo: config.MAIL_USER,
  });
});
app.use('/api/productos', rutaProductos)
app.use('/api/carrito', rutaCarrito)
app.use('/api/usuarios', rutaUsuarios)




/*=====================================================================*/

const server = app.listen(config.PORT, () => {
    console.log(`server funcionando en el PUERTO: ${config.PORT}, en MODO: ${config.NODE_ENV}, PERSISTENCIA: ${config.SELECTED_DB}  `);
  });
  server.on("error", (err) => console.error(err));
  

