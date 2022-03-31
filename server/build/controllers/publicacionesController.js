"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const database_1 = __importDefault(require("../database"));
const database_2 = __importDefault(require("../database"));
class postController2 {
    listaP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('DESCRIBE usuario'); esta acción solo verifica que existe la conexión a la base de datos
            database_1.default.query('SELECT * FROM nuevapublicacion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    crearpost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); El método .body tendrá los valores enviados a traves de Angular
            const result = database_2.default.query('INSERT INTO nuevapublicacion set ?', [req.body]);
            console.log(result);
            res.json({ message: 'publicacion saved' });
        });
    }
}
exports.postController = new postController2();
