import { response, Router } from "express"; //Importar router, metodo que devuelve un objeto con las rutas
import {postController} from '../controllers/publicacionesController';

class PublicacionesRoutes{
    public router: Router = Router(); //Almacena un objeto que devuelve el método router

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/publicaciones',postController.listaP); //Ruta de listado de publicaciones
        this.router.post('/',postController.crearpost); //Ruta que envía el método post para inserción de publicacion
    }
}

const posteos = new PublicacionesRoutes();
export default posteos.router;