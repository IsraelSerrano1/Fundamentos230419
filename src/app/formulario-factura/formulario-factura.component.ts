import { Component } from '@angular/core';
import { Factura } from '../_modelo/factura';
import { ServicioFacturaService } from '../servicio-factura.service';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.css']
})
export class FormularioFacturaComponent {
factura: Factura = new Factura(0,0,0);
facturas: Factura[]= [];

constructor(private facturaService: ServicioFacturaService){
  this.facturas = this.facturaService.facturasS
}

addFactura(){
  this.facturaService.addFacturaS(this.factura);
  this.factura= new Factura(0,0,0);
}

delFactura(){
  this.facturaService.delFacturaS(this.factura.idAux)
}

listFactura(){
  this.facturaService.listFacturaS(this.factura.idAux)
}

updateFactura(){
  this.facturaService.updateFacturaS(this.factura.idAux, this.factura)
  this.factura= new Factura(0,0,0);
}
}
