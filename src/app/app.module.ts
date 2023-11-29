import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BecasComponent } from './pages/becas/becas.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmprendimientoComponent } from './pages/emprendimiento/emprendimiento.component';
import { HistoriasDeExitoComponent } from './pages/historias-de-exito/historias-de-exito.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';


@NgModule({
  declarations: [
    AppComponent,
    BecasComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    EmprendimientoComponent,
    HistoriasDeExitoComponent,
    CarrerasComponent,
    ValoresComponent,
    PlaceholderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
