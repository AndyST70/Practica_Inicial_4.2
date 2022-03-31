"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Importar router, metodo que devuelve un objeto con las rutas
const publicacionesController_1 = require("../controllers/publicacionesController");
class PublicacionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Almacena un objeto que devuelve el método router
        this.config();
    }
    config() {
        this.router.get('/publicaciones', publicacionesController_1.postController.listaP); //Ruta de listado de publicaciones
        this.router.post('/', publicacionesController_1.postController.crearpost); //Ruta que envía el método post para inserción de publicacion
    }
}
const posteos = new PublicacionesRoutes();
exports.default = posteos.router;
