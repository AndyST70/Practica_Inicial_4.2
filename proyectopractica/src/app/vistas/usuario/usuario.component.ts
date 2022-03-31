import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { ArchivosService} from "../../services/archivos.service"
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  

  constructor(private api: ArchivosService, private activerouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  comentar(){
    this.router.navigate(['foro']);
  }
}
