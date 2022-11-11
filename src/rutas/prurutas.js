import jwt          from "jsonwebtoken";
import dotenv       from "dotenv";
import passport     from "passport";
import {Router}     from 'express'


dotenv.config();

const PRIVATE_KEY = "mi_token_secreto";
const rutaLogin1     = Router()
/*============================[Middlewares]============================*/
/*----------- Session -----------*/
/*
passport.use(
  new LocalStrategy((username, password, done) => {
    console.log(username);
    
    if (username == "ajn" && password == "HolaTito")
      return done(null, { id: 1, nombre: "Diego Garcia" });

    done(null, false);
  })
);
//serializar
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//deserializar
passport.deserializeUser(function (id, done) {
  done(null, { id: 1, nombre: "Diego" });
});
app.use(express.json());

*/

rutaLogin1.get("/api/protected", auth, (req, res) => {
  res.send("Estoy en /protected");
});


rutaLogin1.post("/", passport.authenticate("local"), (req, res) => {
  console.log(req.user);

 const { username, password } = req.user;
 
  const userForToken = {
    username,
    password,
  };
  const token = jwt.sign(userForToken, PRIVATE_KEY);
 
  res.json({
    token,
   });
});

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
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


export {rutaLogin1}