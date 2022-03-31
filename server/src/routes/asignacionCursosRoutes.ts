import { response, Router } from "express"; //Importar router, metodo que devuelve un objeto con las rutas
import {asignacionControl} from '../controllers/asignacionCursosController';

class asignacionRoutes{
    public router: Router = Router(); //Almacena un objeto que devuelve el método router

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/asignacion',asignacionControl.listaAsignaciones); //Ruta de listado de asignaciones
        this.router.post('/asignacion/nueva',asignacionControl.asignarCurso); //Ruta que envía el método post para asignacion de curso
    }
}

const asignaciones = new asignacionRoutes();
export default asignaciones.router;