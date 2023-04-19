import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioFacturaComponent } from './formulario-factura/formulario-factura.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'quienes_somos', component: QuienesSomosComponent},
  {path: 'contacta', component: ContactoComponent},
  {path: 'facturas', component: FormularioFacturaComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
