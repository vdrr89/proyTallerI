import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

infIdes = {
  code: ""
}

infArticulo = {
  titulo: "",
  autor: "",
  editorial: "",
  cap: ""
}

infComercial = {
  proveedor: "",
  fechaCompra: "", // cambiar a fecha cuanto antes
  nuevasUnidades: "",
  precioCosto: "",
  precioVenta: ""
}


  clickHandler(e:any){
    e.preventDefault;
    console.log(this.infIdes);
    console.log(this.infArticulo);
    console.log(this.infComercial);
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
