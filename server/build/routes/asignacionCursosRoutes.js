"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Importar router, metodo que devuelve un objeto con las rutas
const asignacionCursosController_1 = require("../controllers/asignacionCursosController");
class asignacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Almacena un objeto que devuelve el método router
        this.config();
    }
    config() {
        this.router.get('/asignacion', asignacionCursosController_1.asignacionControl.listaAsignaciones); //Ruta de listado de asignaciones
        this.router.post('/asignacion/nueva', asignacionCursosController_1.asignacionControl.asignarCurso); //Ruta que envía el método post para asignacion de curso
    }
}
const asignaciones = new asignacionRoutes();
exports.default = asignaciones.router;
