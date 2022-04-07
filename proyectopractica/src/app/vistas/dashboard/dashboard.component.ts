import { Component, OnInit } from '@angular/core';
import { ArchivosService } from 'src/app/services/archivos.service';
import { ListaComentariosI } from 'src/app/models/ListaComentar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  comentarios!: ListaComentariosI[]

  constructor(private Api: ArchivosService) { }

  ngOnInit(): void {
    this.Api.Comentarios(String).subscribe(data =>{ 
      // res => console.log(res),
      // err => console.error(err)
       this.comentarios = data;
       console.log(data)
    } )
  }

}
