import { Component, OnInit, Input } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { ArchivosService} from "../../services/archivos.service"
import { identifierName } from '@angular/compiler';
import { ComentarioI } from 'src/app/models/Comentario';
import { UsuarioI } from 'src/app/models/vista';
import { ResponseI } from 'src/app/models/response.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  //! datos de ingreso
  id = ""
  data = ""
  //Todo manipular y editar
  na! : any;

  datosUsuarios!: UsuarioI;
  usuarioForm = new FormGroup({
  Registro_Academico: new FormControl(''),//
  nombres: new FormControl(''),
  apellidos: new FormControl(''),//
  correo: new FormControl(''),//
  password: new FormControl(''),//
  });

  comentarioForm = new FormGroup({
  usuarioRA : new FormControl(''),//
  descripcion : new FormControl(''),//
  // created_at : new FormControl(''),
  tipo : new FormControl(''),//
  titulo : new FormControl(''),//
});

  constructor(private api: ArchivosService, private activerouter:ActivatedRoute, private router:Router, ) { }

  ngOnInit(): void {
      
    this.activerouter.params.subscribe(params => {this.id = params["id"]})
    let usuario = this.activerouter.snapshot.paramMap.get("Registro_academico")
    this.api.singleUsuario(this.id).subscribe(data => {
      this.usuarioForm.setValue({
         "Registro_Academico": data.Registro_Academico,
         "nombres": data.nombres,
         "apellidos": data.apellidos,
         "password": data.password,
         "correo": data.correo   
           })
    })  
  };
  
  comentar(){
    this.router.navigate(['foro']);
  }
  
  // postUsuario(form: UsuarioI){
    
  //   this.api.editarUsuario(form).subscribe((data: any)=>{
  //     console.log(data)  
  //   })
  // }
  postComentario(form: ComentarioI){
    console.log(form)
    this.api.nuevocomentario(form).subscribe((data: any)=>{  
    })
  }
  // posteditar(Registro_Academico: UsuarioI, user : any){
  //   user = this.na;     
  //   this.api.editarUsuario(Registro_Academico, Registro_Academico).subscribe(data =>{
  //     // let msj : ResponseI = data;
  //     // if(msj.status == "userupdate"){
        

  //     // }else{



  //     // }
  //     console.log(Registro_Academico)
  //   })
  // }

  //Prueba
  posteditar(form: UsuarioI){
    console.log(form)   
    this.api.editarUsuario(form).subscribe((data: any) =>{

    })
  }
}
