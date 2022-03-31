import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import {} from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { ArchivosService } from './services/archivos.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsuarioComponent } from './vistas/usuario/usuario.component';
import { ComentarComponent } from './vistas/comentar/comentar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    ListComponent, 
    HolaMundoComponent, 
    HeaderComponent, 
    FooterComponent,
    routingComponents, //llamamos nuestras rutas de crood y login
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ArchivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
