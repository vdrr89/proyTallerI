export class Productos {
    cod:string;
    titulo:string;
    autor:string;
    editorial:string;
    capitulo:string;
    proveedor:string;
    fechaCompra:string;
    stock:number;
    precioCosto:number;
    precioVenta:number;

    constructor(){
        this.cod="";
        this.titulo="";
        this.autor="";
        this.editorial="";
        this.capitulo="";
        this.proveedor="";
        this.fechaCompra=""; // este debería ser fecha, no string
        this.stock=0;
        this.precioCosto=0;
        this.precioVenta=0;
    }

}
