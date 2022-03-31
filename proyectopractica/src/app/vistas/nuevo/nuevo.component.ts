import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import{Router, ActivatedRoute} from '@angular/router';
import { ResponseI } from 'src/app/models/response.interface';
import { ArchivosService} from "../../services/archivos.service"
import { Curso } from 'src/app/models/Curso';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  nuevoForm = new FormGroup({
    Registro_Academico: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    password: new FormControl(''),
    correo: new FormControl(''),

  });

  constructor(private api: ArchivosService, private activerouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

  }
  postForm(form: Curso){
    console.log(form)
    this.api.nuevoUsuario(form).subscribe((data: any)=>{  

    })
  
  }
  Guardar(){
    this.router.navigate(['inicio']);
  }
  salir(){
    this.router.navigate(['inicio']);
  }
}
