"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //Dependencias para desarrollo
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const publicacionesRoutes_1 = __importDefault(require("./routes/publicacionesRoutes"));
const asignacionCursosRoutes_1 = __importDefault(require("./routes/asignacionCursosRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config(); //Llama la configuracion
        this.routes(); //Llama las rutas
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //Asignacion de puerto, si hay uno predeterminado lo asigna, si no entonces se va la puerto 3000
        this.app.use((0, morgan_1.default)('dev')); //Con estos modulos se puede visualizar las peticiones del servidor
        this.app.use((0, cors_1.default)()); //permite que los recursos restringidos de una pagina web se soliciten desde otro sitio fuera del dominio
        this.app.use(express_1.default.json()); //Esto devuelve un objeto con los datos enviados en formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //En caso de acceder a formularios hmtl
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/usuarios', usuariosRoutes_1.default);
        this.app.use('/publicacionesLista', publicacionesRoutes_1.default);
        this.app.use('/cursos', asignacionCursosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));
        });
    }
}
const server = new Server(); //Guardar el server en una constante
server.start();
