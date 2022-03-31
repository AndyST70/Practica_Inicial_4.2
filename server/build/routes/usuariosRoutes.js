"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Importar router, metodo que devuelve un objeto con las rutas
const usuarioController_1 = require("../controllers/usuarioController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Almacena un objeto que devuelve el método router
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.UsuarioController.lista); //Ruta que devuelve el listado de usuarios
        this.router.post('/login', usuarioController_1.UsuarioController.login); //Ruta para el login
        this.router.post('/', usuarioController_1.UsuarioController.crearUsuario); //Ruta que envía el método post para inserción de datos
        this.router.put('/:Registro_Academico', usuarioController_1.UsuarioController.actualizarUsuario); //Ruta para actualizar usuario
        this.router.get('/:Registro_Academico', usuarioController_1.UsuarioController.getDatos); //Ruta para obtener datos de 1 usuario
    }
}
const usuariosR = new UsuariosRoutes();
exports.default = usuariosR.router;
