import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})

export class CrearProductoComponent implements OnInit {

  prod: Productos[] = [];
  productos:Productos = {
    id:"",
    codigo:"",
    imgUrl:"",
    titulo:"",
    autor:"",
    editorial:"",
    capitulo:"",
    proveedor:"",
    fechaCompra:"",
    nuevasUnidades:0,
    stock:0,
    precioCosto:0,
    precioVenta:0
  }
  producto2: Productos = new Productos();

  constructor(
    private _productosService: ProductosService,
    private _activedRoute: ActivatedRoute,
    private route: Router
    ) { }

  id="";

  ngOnInit(): void {
    //version1 / funciona con submit() update2() y cleanFormData()
    // no sacar el producto2 por favor comportate
    this._activedRoute.paramMap.subscribe((item:any)=>{
      this.id = item.get('id');
      if(this.id != ""){
        this._productosService.getProductos().subscribe((response:Productos[])=>{
          const item = response.filter((prod2:any)=>{
            return prod2.id == this.id;
          })[0];
          this.producto2 = item;
        })
          //version2 / cargar()
          // this.cargar();
      }
    })
  }

  // VERSION1 / funca con update2() y cleanFormData() y ngOnInit
  submit(event:any){
    if(this.producto2.id != ""){
      this._productosService.actualizarProductos(this.producto2).subscribe((response:any)=>{
        console.log("submit if response: ", response);
        this.route.navigate(['/gestion/productos']); //iupii
      });
    } else { //update
      this._productosService.addProductos(this.producto2).subscribe((response:any)=>{
        console.log("submit else response: ", response);
        this.update2(this.productos);
        this.cleanFormData();
        this.route.navigate(['/gestion/productos']); //iupii
      });
    }
  }

  //VERSION1 / funca con submit() y cleanFormData() y ngOnInit / edita
  //este funcionaba hasta que sin tocarlo dejó de funcionar
  update2(productos3:Productos){
    // da igual con this.producto2 que con this.prod
    this.producto2.id = productos3.id;
    this.producto2.codigo = productos3.codigo;
    this.producto2.titulo = productos3.titulo;
    this.producto2.autor = productos3.autor;
    this.producto2.capitulo = productos3.capitulo;
    this.producto2.editorial = productos3.editorial;
    this.producto2.fechaCompra = productos3.fechaCompra;
    this.producto2.imgUrl = productos3.imgUrl;
    this.producto2.precioCosto = productos3.precioCosto;
    this.producto2.precioVenta = productos3.precioVenta;
    this.producto2.stock = productos3.stock;
    this.producto2.nuevasUnidades = productos3.nuevasUnidades;
  }


  //VERSION1 / funca con submit() update2() y ngOnInit / funca divino
  cleanFormData(){
    console.log("crear-producto cleanFormData");
    this.producto2.id = "";
    this.producto2.codigo = "";
    this.producto2.imgUrl = "";
    this.producto2.titulo = "";
    this.producto2.autor = "";
    this.producto2.editorial = "";
    this.producto2.capitulo = "";
    this.producto2.proveedor = "";
    this.producto2.fechaCompra = "";
    this.producto2.nuevasUnidades = 0;
    this.producto2.stock = 0;
    this.producto2.precioCosto = 0;
    this.producto2.precioVenta = 0;
  }

  //VERSION2 / funca con create() y update3() y cargar(ngOnInit) / agregar la función en el ngOnInit()
  cargar():void{
    // this._activedRoute.params.subscribe(
    //   e=>{
    //     let id=e['id'];
    //     if(id){
    //       this._productosService.getProductos().subscribe(
    //         es=>this.prod=es
    //       );
    //     };
    //   }
    // );
  }

  //VERSION2 / funca con update3() y cargar(ngOnInit)
  create(){
    // console.log(this.productos);
    // this._productosService.addProductos(this.producto2).subscribe(
    //   res=>this.route.navigate(['/gestion/productos'])
    // )
  }

  //VERSION2 / funca con create() y cargar(ngOnInit)
  update3():void{
    this._productosService.actualizarProductos(this.productos).subscribe(
      res=>this.route.navigate(['/gestion/productos'])
    );
  }

  //VERSION3 / funca con save3() hay que agregar en ngOnInit
  // id1:any;
  // editing:boolean=false;
  getId(){
  //   this.id1=this._activedRoute.snapshot.params['id1'];
  //   if(this.id1){ //ya el if this.id1 es = si tiene un valor
  //     this.editing=true;
  //     this._productosService.getProductos().subscribe((response:Productos[])=>{
  //       this.prod = response;
  //       this.productos = this.prod.find((m)=>{return m.productos.id==this.id1})
  //     })
  //   } else {
  //     this.editing=false;
  //   }
  }

  //VERSION3 / funca con getId()
  save3(){
  //   if(this.editing){
  //     this._productosService.actualizarProductos(this.productos).subscribe((response)=>{
  //       this.route.navigateByUrl('/');
  //       alert('producto actualizado');
  //     }), (error)=>{
  //       alert('error al actualizar');
  //     }
  //   } else {
  //     this._productosService.addProductos(this.productos).subscribe((response)=>{
  //       this.route.navigateByUrl('/');
  //       alert('producto guardado');
  //     }), (error)=>{
  //       alert('error al guardar');
  //     }
  //   }
  }



}
