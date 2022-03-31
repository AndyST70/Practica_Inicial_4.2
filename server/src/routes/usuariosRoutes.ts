import { response, Router } from "express"; //Importar router, metodo que devuelve un objeto con las rutas
import {UsuarioController} from '../controllers/usuarioController';

class UsuariosRoutes{
    public router: Router = Router(); //Almacena un objeto que devuelve el método router

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',UsuarioController.lista); //Ruta que devuelve el listado de usuarios
        this.router.post('/login',UsuarioController.login); //Ruta para el login
        this.router.post('/',UsuarioController.crearUsuario); //Ruta que envía el método post para inserción de datos
        this.router.put('/:Registro_Academico',UsuarioController.actualizarUsuario); //Ruta para actualizar usuario
        this.router.get('/:Registro_Academico',UsuarioController.getDatos); //Ruta para obtener datos de 1 usuario
    }
}

const usuariosR = new UsuariosRoutes();
export default usuariosR.router;