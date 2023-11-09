import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './informacion-personal/datos-personales.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { EstudiosTerminadosComponent } from './estudios-terminados/estudios-terminados.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    HeaderComponent,
    FooterComponent,
    HabilidadesComponent,
    ExperienciaLaboralComponent,
    EstudiosTerminadosComponent,
    IdiomasComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
