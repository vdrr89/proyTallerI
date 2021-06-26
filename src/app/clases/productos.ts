export class Productos {
    id: string;
    codigo:string;
    imgUrl:string;
    titulo:string;
    autor:string;
    editorial:string;
    capitulo:string;
    proveedor:string;
    fechaCompra:string;
    nuevasUnidades:number;
    stock:number;
    precioCosto:number;
    precioVenta:number;

    constructor(){
        this.id="";
        this.codigo="";
        this.imgUrl="";
        this.titulo="";
        this.autor="";
        this.editorial="";
        this.capitulo="";
        this.proveedor="";
        this.fechaCompra="";
        this.nuevasUnidades=0;
        this.stock=0;
        this.precioCosto=0;
        this.precioVenta=0;
    }

}
