# Entrega Final

* Se subió a HEROKU a la dirección https://myfinal2022.herokuapp.com/ 
* Para verificar que llegan los mails te paso los paramatros por privado
* No se hizo Front, se intentó que todas las respuestas sean json 

## RUTAS COMUNES
### /config ##

    tipo        : GET 
    solicitud   : /config
    descripción : Devuelve la configuracion del servidor
    respuesta   : Pagina en pug


## RUTAS PARA LOS PRODUCTOS

### /api/productos ##

    tipo        : GET 
    solicitud   : /api/productos
    descripción : Devuelve todos los productos de la colección
    respuesta   : array con productos
~~~
        [
        {
            "_id": "6356da71ab6d4390581237b9",
            "id": 3,
            "categoria":"Hogar",
            "nombre": "Cámara APS-C a6100 con enfoque automático rápido",
            "descripcion": "Cáma hermosa y muy buena",
            "precio": 1523.15,
            "foto": "https://http2.mlstatic.com/D_NQ_NP_724054-MLA31993297383_082019-O.webp"
        },
        {
            "_id": "6356da71ab6d4390581237ba",
            "id": 4,
            "categoria":"Hogar",
            "nombre": "Cámara a6400 + SELP18105G",
            "descripcion": "Cáma hermosa y muy buena",
            "precio": 4530,
            "foto": "https://http2.mlstatic.com/D_NQ_NP_842574-MLA40353899541_012020-O.webp"
        },
        {
            "_id": "6356da71ab6d4390581237b8",
            "id": 2,
            "categoria":"Profesional",
            "nombre": "Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38",
            "descripcion": "Cáma hermosa y muy buena",
            "precio": 100.5,
            "foto": "https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
        }
        ]
~~~

### /api/productos/:id ###

    tipo        : GET
    Solicitud   : /api/productos/1
    descripción : Devuelve el producto solicitado de no existir nos envia "producto no encontrado" 
    respuesta   :
~~~
                    {
                        "_id": "6356da71ab6d4390581237b7",
                        "id": 1,
                        "categoria":"Hogar",
                        "nombre": "Cámara compacta full-frame Alpha 7C A1",
                        "descripcion": "Cáma hermosa y muy buena para presentaciones profesionales",
                        "precio": 10200.5,
                        "foto": "https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
                    }
~~~
    error       :
~~~
                    {
                        "message": "Producto no encontrado"
                    }
~~~
### /api/productos/cate/:categoria ###

    tipo        : GET
    Solicitud   : /api/productos/cate/Hogar
    descripción : Devuelve los productos de una categoria dada" 
    respuesta   :
~~~
                [
                    {
                        "id": 1,
                        "categoria": "Hogar",
                        "nombre": "Cámara compacta full-frame Alpha 7C A1",
                        "descripcion": "Cáma hermosa y muy buena para presentaciones profesionales",
                        "precio": 10200.5,
                        "foto": "https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
                    },
                    {
                        "id": 3,
                        "categoria": "Hogar",
                        "nombre": "Cámara APS-C a6100 con enfoque automático rápido",
                        "descripcion": "Cáma hermosa y muy buena",
                        "precio": 1523.15,
                        "foto": "https://http2.mlstatic.com/D_NQ_NP_724054-MLA31993297383_082019-O.webp"
                    },
                    {
                        "id": 4,
                        "categoria": "Hogar",
                        "nombre": "Cámara a6400 + SELP18105G",
                        "descripcion": "Cáma hermosa y muy buena",
                        "precio": 4530,
                        "foto": "https://http2.mlstatic.com/D_NQ_NP_842574-MLA40353899541_012020-O.webp"
                    }
                ]
~~~
    error       :
~~~
                    {
                        "message": "No hay Productos para esa Categoria"
                    }
~~~
### /api/productos ###

    tipo        : POST
    solicitud   : /api/productos
    body        : 
~~~
                    {
                        "id":150,
                        "categoria":"Profesional",
                        "nombre": "Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38",
                        "descripcion": "Cáma hermosa y muy buena",
                        "precio": 100.50,
                        "foto": "https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
                    }
~~~

    descripción : Nos permite dar de alta un producto, cuando mandamos el alta no toma en cuenta el id enviado
                  sino que busca el id máximo en la base y le suma 1.

    respuesta   : el producto dado de alta
~~~
                    {
                    "id": 11,
                    "categoria":"Profesional",
                    "nombre": "Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38",
                    "descripcion": "Cáma hermosa y muy buena",
                    "precio": 100.50,
                    "foto": "https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp",
                    "_id": "6363e159b60780bc548f0b32"
                    }
~~~
### /api/productos/id: ###

    tipo        : PUT
    solicitud   : /api/productos/id:
    body        :
~~~
                    {
                    "id":150,
                    "categoria":"Profesional",
                    "nombre": "Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38",
                    "descripcion": "Cáma hermosa y muy buena",
                    "precio": 100.50,
                    "foto": "https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
                    }
~~~
    descripción : Nos permite modificar los atributos del producto, menos el id" 
    respuesta   : json con el registro modificado del producto
~~~
                    {
                    "id":150,
                    "categoria":"Profesional",
                    "nombre": "Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38",
                    "descripcion": "Cáma hermosa y muy buena",
                    "precio": 100.50,
                    "foto": "https://http2.mlstatic.com/D_NQ_NP_993642-MLA31993704014_082019-O.webp"
                    }
~~~
 ### /api/productos/id: ###

    tipo        : DELETE
    solicitud   : /api/productos/id:
    body        : 
    descripción : Nos permite BORRAR un producto" 
    respuesta   : un json de la base
~~~
                    {
                        "message": "Producto dado de baja"
                    }
~~~
    error       :
~~~
                    {
                        "message": "Producto no encontrado"
                    }
~~~
## RUTAS PARA EL CARRITO ##



### /api/carrito/:id? ###

    tipo        : GET
    solicitud   : /api/carrito/:id?
    descripción : Si se le pasa un id de carrito (email), devuelve ese, sino devuelve todos los carritos que hay    almacenados
    respuesta   : array json con todos los carritos de la colección o solo el carrito pedido
~~~
                    {
                        "_id": "6361544a39950ee0aa95769e",
                        "id": "unemail@paradaralta.com.ar",
                        "productos": [
                            {
                                "idProducto": 2,
                                "cantidad": 2,
                                "preuni": 100.25,
                                "_id": "6361544a39950ee0aa95769f"
                            },
                            {
                                "idProducto": 3,
                                "cantidad": 1,
                                "preuni": 130.25,
                                "_id": "6361544a39950ee0aa9576a0"
                            }
                        ]
                    }
~~~
    error       :
~~~
                    {
                        "message": "Carrito no encontrado"
                    }    
~~~

### /api/carrito ###

    tipo        : POST
    solicitud   : /api/carrito
    body        : 
~~~
                    {
                        "id": "unemail@paradaralta.com.ar",
                        "productos": [
                            {
                                "idProducto": 2,
                                "cantidad": 2,
                                "preuni": 100.25
                            },
                            {
                                "idProducto": 3,
                                "cantidad": 1,
                                "preuni": 130.25
                            }
                        ]
                    }
~~~ 

    descripción : Crea un carrito  para ese mail o actiualiza uno existente
    respuesta   : el carrito actualizado o dado de alta
~~~
                    {
                        "_id": "6361544a39950ee0aa95769e",
                        "id": "unemail@paradaralta.com.ar",
                        "productos": [
                            {
                                "idProducto": 2,
                                "cantidad": 2,
                                "preuni": 100.25,
                                "_id": "6361544a39950ee0aa95769f"
                            },
                            {
                                "idProducto": 3,
                                "cantidad": 1,
                                "preuni": 130.25,
                                "_id": "6361544a39950ee0aa9576a0"
                            }
                        ]
                    }
~~~
### /api/carrito/:id ###

    tipo        : DELETE
    solicitud   : /api/carrito/:id
    descripción : Borra un carrito según su id
    respuesta   :
~~~
                    {
                        "message": "Carrito dado de baja"
                    }
~~~
    error       :
~~~
                    {
                        "message": "Carrito no encontrado"
                    }    
~~~
## RUTAS PARA EL USUARIO ##

### /api/usuarios/login ###
    tipo        : POST
    solicitud   : /api/usuarios/login
    body        :
~~~
                    {
                    "email":"anicolas@gmail.com",
                    "pass": "HolaTito"
                    }
~~~
    descripción : Nos permite Autenticar un usuario 
    respuesta   : Nos devuelve de ser correto un token para autorizar las llamadas a la API 
~~~
                     {
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaWNvbGFzQGdtYWlsLmNvbSIsIm5vbWJyZSI6IkFsZWphbmRybyBKYXZpZXIgTmljb2zDoXMiLCJpYXQiOjE2NjgwOTkyMDl9.XlpqjvU7r0q5vM4ypjB3CAvsfNlkQShDPfmmk0uPrGo"
                    }
~~~
### /api/usuarios/registro ###
    tipo        : POST
    solicitud   : /api/usuarios/registro
    body        :
~~~
                    {
                    "email":"asosa@gmail.com",
                    "nombre":"Adria Sosa",
                    "direccion":"Recuero 1832, CABA",
                    "telefono":"+5411335566854",
                    "pass":"$2b$10$usGpEbIUDs9fEkjOQnTdsOgg6tA1xGyGMlR77U8VeVP2aPzg1Xk.K",
                    "edad": 25,
                    "foto":"https://http2.mlstatic.com/D_NQ_NP_55456667LA31993704014_082019-O.webp"
                    }
~~~
    descripción : Nos permite registrar un nuevo usuario 
    respuesta   : Nos devuelve el registro de alta si es correcto 
~~~
                    {
                    "email":"asosa@gmail.com",
                    "nombre":"Adria Sosa",
                    "direccion":"Recuero 1832, CABA",
                    "telefono":"+5411335566854",
                    "pass":"$2b$10$usGpEbIUDs9fEkjOQnTdsOgg6tA1xGyGMlR77U8VeVP2aPzg1Xk.K",
                    "edad": 25,
                    "foto":"https://http2.mlstatic.com/D_NQ_NP_55456667LA31993704014_082019-O.webp"
                    }
~~~
    error       :
~~~
                    {
                        "message": "No se dió de alta el Usuario"
                    }    
~~~
### /api/usuarios/logout ###
    tipo        : POST
    solicitud   : /api/usuarios/logout
    body        :
    descripción : Nos permite hacer un logout del usuario
    respuesta   :  se redirecciona a /

### /api/usuarios/pro ###
    tipo        : POST
    solicitud   : /api/usuarios/pro
    body        :
    descripción : ruta para probar el token y la autenticacion del usuario
    respuesta   :  Estoy en Protected
    error       :
~~~
                    {
                        "error": "not authenticated"
                    }    
~~~

### END
