import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioFacturaComponent } from './formulario-factura/formulario-factura.component';
import { FormsModule } from '@angular/forms';
import { ServicioFacturaService } from './servicio-factura.service';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioFacturaComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioFacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
