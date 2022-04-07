import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Curso} from "../models/Curso"
import { Observable } from 'rxjs';
import {LoginI} from"../models/login.interface";
import {ResponseI} from "../models/response.interface";
import { observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { UsuarioI } from '../models/vista';
import { ComentarioI } from '../models/Comentario';
import { ListaComentariosI } from '../models/ListaComentar';
@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  Api_Uri = "http://localhost:3000/";
  constructor(private http: HttpClient) {   }
  // logynByEmail(form: LoginI):Observable<ResponseI>{
  //   let direccion = this.url +  
  //   return
  // }
  //! funcionando
  loginByEmail(form: any) {
    let direccion = this.Api_Uri + "usuarios/login"
    return this.http.post<any>(direccion, form);
  }
 //? funciona
  nuevoUsuario(form: Curso): Observable<ResponseI> {
    let direccion = this.Api_Uri +"usuarios"
    return this.http.post<ResponseI>(direccion, form)
  }
  //? no funcio :(
  // editarUsuario(Registro_Academico: any ): Observable<UsuarioI>{   //mandar usuario
  //   let direccion = this.Api_Uri + "usuarios/"+ Registro_Academico; 
  //   return this.http.get <UsuarioI>(direccion);
  // }
  //? funcionando
  singleUsuario(Registro_Academico: any): Observable<any>{
    let direccion = this.Api_Uri + "usuarios/"+ Registro_Academico
    return this.http.get<any>(direccion, Registro_Academico)
  }
  //? no sabemos
  editarUsuario(form: UsuarioI):Observable<ResponseI>{
    let direccion = this.Api_Uri + "usuarios/" + form.Registro_Academico
    return this.http.put<any>(direccion, form)
  }
  //? funciona
  nuevocomentario(form: ComentarioI): Observable<ResponseI> {
    let direccion = this.Api_Uri + "publicacionesLista"
    return this.http.post<ResponseI>(direccion, form);

  }
  //? funciona
  Comentarios(form: any): Observable<ListaComentariosI[]>{
    let direccion = this.Api_Uri + "publicacionesLista/publicaciones"
    return this.http.get<ListaComentariosI[]>(direccion);
  }
  
  //? funciona
  getCursos(){
    return this.http.get('${this.Api_Uri}/archivos');
  }
  getCurso(id: string){
    return this.http.get('${this.Api_Uri}/archivos/${id}');
  }
  saveCurso(curso: Curso){
    return this.http.post("$this.Api_Uri}/archivos", curso);
  }
  deteleCurso(id: string){
    return this.http.delete('${this.Api_Uri}/archivos/${id}');
  
  }
}
