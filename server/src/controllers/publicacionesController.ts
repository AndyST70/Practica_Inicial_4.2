
import {request, Request,Response} from 'express';

import pool from '../database';
import db from '../database';

class postController2 {
    public async listaP(req:Request,res:Response){
        //pool.query('DESCRIBE usuario'); esta acción solo verifica que existe la conexión a la base de datos
        pool.query('SELECT * FROM nuevapublicacion', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async crearpost(req:Request,res:Response){
        //console.log(req.body); El método .body tendrá los valores enviados a traves de Angular
        const result = db.query('INSERT INTO nuevapublicacion set ?', [req.body]);
        console.log(result)
        res.json({message: 'publicacion saved'});
    }

}

export const postController = new postController2();
