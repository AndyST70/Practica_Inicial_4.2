import { Component, OnInit } from '@angular/core';
import { ArchivosService} from"../../services/archivos.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cursos: any = [];
  constructor(private archivosService: ArchivosService) { 

  }

  ngOnInit(): void { 
     this.archivosService.getCursos().subscribe(
       res => {this.cursos = res;},
       err => console.error(err)
     );
  }

}
