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
exports.UsuarioController = void 0;
const database_1 = __importDefault(require("../database"));
const database_2 = __importDefault(require("../database"));
class usuarioController2 {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('DESCRIBE usuario'); esta acción solo verifica que existe la conexión a la base de datos
            database_1.default.query('SELECT * FROM usuario', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    crearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); El método .body tendrá los valores enviados a traves de Angular
            const result = database_2.default.query('INSERT INTO usuario set ?', [req.body]);
            console.log(result);
            res.json({ message: 'usuario saved' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const registro = req.body.Registro_Academico;
            const pass = req.body.password;
            if (registro && pass) {
                //Verifica el usuario
                database_2.default.query('SELECT * FROM usuario WHERE Registro_Academico = ?', [registro], function (err, result, fields) {
                    if (err)
                        throw err;
                    if (result.length > 0 && result[0].password == pass) { //Muestra error pero la linea es funcional
                        res.json({ text: 'Credenciales correctas' });
                        console.log('OK');
                    }
                    else {
                        res.json({ text: 'Credenciales incorrectas' });
                        console.log('Not valid');
                    }
                    ;
                });
            }
            else {
                res.json({ text: 'No hay datos' });
            }
            ;
        });
    }
    actualizarUsuario(req, res) {
        const { Registro_Academico } = req.params;
        database_2.default.query('UPDATE  usuario SET ? WHERE Registro_Academico = ?', [req.body, Registro_Academico]);
        res.json({ message: 'user UPDATE ' });
    }
    getDatos(req, res) {
        const { Registro_Academico } = req.params;
        database_2.default.query('SELECT * FROM usuario WHERE Registro_Academico = ?', [Registro_Academico], function (err, result, fields) {
            if (err)
                throw err;
            res.json({ Registro_Academico: result[0].Registro_Academico, nombres: result[0].nombres, apellidos: result[0].apellidos, password: result[0].password, correo: result[0].correo }); //Muestra error pero la línea es funcional
        });
    }
}
exports.UsuarioController = new usuarioController2();
