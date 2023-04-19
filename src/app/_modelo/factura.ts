export class Factura{
    private _idFactura: number;    
    private _idCliente: number;    
    private _totalFactura: number;    
    private _iva: number;
    private _idAux: number;  
      
    
    
    static idF = 0;

    constructor(idCliente: number, totalFactura: number, iva: number){
        Factura.idF++
        this._idFactura = Factura.idF;
        this._idCliente = idCliente;
        this._totalFactura = totalFactura;
        this._iva = iva;
        this._idAux = 0;       
    }
    
    public get idFactura(): number {
        return this._idFactura;
    }
    public set idFactura(value: number) {
        this._idFactura = value;
    }
    public get idCliente(): number {
        return this._idCliente;
    }
    public set idCliente(value: number) {
        this._idCliente = value;
    }
    public get totalFactura(): number {
        return this._totalFactura;
    }
    public set totalFactura(value: number) {
        this._totalFactura = value;
    }
    public get iva(): number {
        return this._iva;
    }
    public set iva(value: number) {
        this._iva = value;
    }
    public get idAux() {
        return this._idAux;
    }
    public set idAux(value) {
        this._idAux = value;
    }
    
}