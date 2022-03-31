
import {request, Request,Response} from 'express';

import pool from '../database';
import db from '../database';

class asignacionController {
    public async listaAsignaciones(req:Request,res:Response){
        //pool.query('DESCRIBE usuario'); esta acción solo verifica que existe la conexión a la base de datos
        pool.query('SELECT * FROM asignacioncurso', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async asignarCurso(req:Request,res:Response){
        //console.log(req.body); El método .body tendrá los valores enviados a traves de Angular
        const result = db.query('INSERT INTO asignacioncurso set ?', [req.body]);
        console.log(result)
        res.json({message: 'curso asignado'});
    }

}

export const asignacionControl = new asignacionController();