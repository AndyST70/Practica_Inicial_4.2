import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { ArchivosService} from "../../services/archivos.service"
import { identifierName } from '@angular/compiler';
import { ComentarioI } from 'src/app/models/Comentario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
comentarioForm = new FormGroup({
  usuarioRA : new FormControl(''),//
  descripcion : new FormControl(''),//
  // created_at : new FormControl(''),
  tipo : new FormControl(''),//
  titulo : new FormControl(''),//
});

  constructor(private api: ArchivosService, private activerouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  
  comentar(){
    this.router.navigate(['foro']);
  }
  
  postComentario(form: ComentarioI){
    console.log(form)
    this.api.nuevocomentario(form).subscribe((data: any)=>{  
    })
  }
}
