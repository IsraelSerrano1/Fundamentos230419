import { Injectable } from '@angular/core';
import { Factura } from './_modelo/factura';

@Injectable({
  providedIn: 'root'
})
export class ServicioFacturaService {

  facturasS: Factura[] = []

  constructor() { }

  addFacturaS(factura: Factura){
    this.facturasS.push(factura);    
  }

 delFacturaS(id: number){
    let index = this.facturasS.findIndex((facturasS) => facturasS.idFactura === id);

    if(index !=-1){
      this.facturasS.splice(index,1);
    }
  }

  listFacturaS(id: number){
    let index = this.facturasS.findIndex((facturasS) => facturasS.idFactura === id);

    if(index != -1){
      alert("ID Factura: " + this.facturasS[index].idFactura +"\n ID Cliente: " + this.facturasS[index].idCliente + 
      "\n Total Factura: " + this.facturasS[index].totalFactura +"\n IVA: " + this.facturasS[index].iva)
    }
  }

  updateFacturaS(id: number, newFactura: Factura){
    let index = this.facturasS.findIndex((facturasS) => facturasS.idFactura === id);

    if(index != -1){
    newFactura.idFactura = id;
    this.facturasS[index] = newFactura;    
    }
  }
}
