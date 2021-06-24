import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

    _producto: any;

  constructor(private _productosService: ProductosService, private _activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(route => {
      const codigo = route.get('codigo');

      if(codigo != null){
        this. _productosService.getProductos().subscribe(response => {
          this._producto = response.filter(item => {
            return item.codigo === codigo;
          })[0];
        })
      }
    })
  }

}
