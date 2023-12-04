import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BecasComponent } from './pages/becas/becas.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HistoriasDeExitoComponent } from './pages/historias-de-exito/historias-de-exito.component';
import { EmprendimientoComponent } from './pages/emprendimiento/emprendimiento.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';
import { FaqQuestionsComponent } from './components/faq-questions/faq-questions.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'becas', component: BecasComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'exito', component: HistoriasDeExitoComponent },
  { path: 'empre', component: EmprendimientoComponent },
  { path: 'carreras', component: CarrerasComponent },
  { path: 'valores', component: ValoresComponent },
  { path: 'faq-questions/:tema', component: FaqQuestionsComponent },
  { path: 'si', component: PlaceholderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
