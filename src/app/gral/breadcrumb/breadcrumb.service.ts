import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor() { }

  getBreadcrumb():Array<any>{
    const breadcrumb = [
      { name: 'home', path: './', children: [] },
      { name: 'caja', path: './caja', children: [] },
      { name: 'gestion', path: './gestion', children: [] },
      { name: 'gestion de usuarios', path: './gestion/usuarios', children: [] },
      { name: 'crear usuario', path: './gestion/usuarios/newuser', children: [] },
      { name: 'gestion de productos', path: './gestion/productos', children: [] },
      { name: 'crear producto', path: './gestion/producto/crearproducto', children: [] },
      { name: 'login', path: './login', children: [] },
      { name: 'newuser', path: './newuser', children: [] }
    ];
    return breadcrumb;
  }

}
