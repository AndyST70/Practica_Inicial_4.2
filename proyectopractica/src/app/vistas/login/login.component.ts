import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginI } from "../../models/login.interface";
import { ArchivosService } from '../../services/archivos.service';
import { Router, RouterEvent} from "@angular/router" 
import{ ResponseI}from "../../models/response.interface"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    Registro_Academico: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
  Registro_Academico: string = "";
  password: string = "";

  usuario_a_logear: any= {
    Registro_Academico: "",
    password : ""
  }
  constructor(private api: ArchivosService, private router: Router) { }
  errorStatus: boolean=false;
  errorMsj: any = "";
  ngOnInit(): void {
    this.checkLocalStorage();
  }
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['usuario']);

    }
  }
  
  //!No funciona 
  onLogin(form:LoginI){
    // recibimos el response
    this.api.loginByEmail(form).subscribe(data=>{
      //console.log(form)//visualizamos
      let dataResponse: ResponseI = data;
      if(dataResponse.status == "200" ){
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['dashboard']);
      }
    })
  }

  logear():void{
     this.Registro_Academico=((document.getElementById('Registro_Academico') as HTMLInputElement).value);
     this.password=((document.getElementById('password') as HTMLInputElement).value);
     this.usuario_a_logear={
       Registro_Academico: this.Registro_Academico,
       password: this.password
     }
     
     this.api.loginByEmail(this.usuario_a_logear).subscribe(data =>{
      // let dataResponse: ResponseI = data; 
      if(data.text=='Credenciales correctas'){
         console.log("aqui va todo bien, el usuario se logueo");
        // localStorage.setItem("token", this.usuario_a_logear.result.token)
         this.router.navigate(['usuario'])
         console.log(data.text);
       }else{
         console.log("el usuario no se logeo");
         console.log(data.text);
        //  this.router.navigate(['nuevo'])
        //  this.errorStatus = true; 
        //  this.errorMsj = this.usuario_a_logear.result.errorMsj;
        // localStorage.setItem("token", dataResponse.result.token);
       }
       console.log(data);
     })
   }
   editarusuario(Registro_Academico){
     console.log(Registro_Academico)

   }
}
