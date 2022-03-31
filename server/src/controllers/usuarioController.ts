
import {request, Request,Response} from 'express';

import pool from '../database';
import db from '../database';

class usuarioController2 {
    public async lista(req:Request,res:Response){
        //pool.query('DESCRIBE usuario'); esta acción solo verifica que existe la conexión a la base de datos
        pool.query('SELECT * FROM usuario', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async crearUsuario(req:Request,res:Response){
        //console.log(req.body); El método .body tendrá los valores enviados a traves de Angular
        const result = db.query('INSERT INTO usuario set ?', [req.body]);
        console.log(result)
        res.json({message: 'usuario saved'});
    }

    public async login(req: Request, res: Response){
        const registro = req.body.Registro_Academico;
        const pass = req.body.password;
        
        if(registro && pass){
            //Verifica el usuario
            db.query('SELECT * FROM usuario WHERE Registro_Academico = ?', [registro], function(err, result, fields) {
                if (err) throw err;
                if (result.length>0 && result[0].password == pass){  //Muestra error pero la linea es funcional
                    res.json({text:'Credenciales correctas'});
                    console.log('OK');
                }
                else{
                    res.json({text:'Credenciales incorrectas'});  
                    console.log('Not valid');
                    };
            }); 
        }
        else{res.json({text:'No hay datos'})};
    } 

    public actualizarUsuario(req:Request,res:Response){
            const {Registro_Academico} = req.params;
            db.query('UPDATE  usuario SET ? WHERE Registro_Academico = ?', [req.body, Registro_Academico]);
            res.json({message: 'user UPDATE '});
    }

    public getDatos(req:Request,res:Response){
        const {Registro_Academico} = req.params;
        db.query('SELECT * FROM usuario WHERE Registro_Academico = ?', [Registro_Academico], function(err, result, fields) {
          if (err) throw err;
          res.json({Registro_Academico:result[0].Registro_Academico, nombres:result[0].nombres, apellidos:result[0].apellidos, password: result[0].password, correo: result[0].correo}); //Muestra error pero la línea es funcional
      });
    }
}

export const UsuarioController = new usuarioController2();