import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//comun
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CajaComponent } from './caja/caja.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './login/new-user/new-user.component';
//gestion
import { GestionComponent } from './gestion/gestion.component';
import { GestionTabsComponent } from './gestion/gestion-tabs/gestion-tabs.component';
//gestion productos
import { GestionproductosComponent } from './gestion/gestionproductos/gestionproductos.component';
import { CrearProductoComponent } from './gestion/gestionproductos/crear-producto/crear-producto.component';
//gestion usuarios
import { GestionUsuariosComponent } from './gestion/gestion-usuarios/gestion-usuarios.component';

const routes: Routes = [
  {path:'breadcrumb',component: BreadcrumbComponent},
  {path:'',component: HomeComponent},
  {path:'productos',component: ProductosComponent},
  {path:'caja',component: CajaComponent},

  {path:'gestion',component: GestionComponent},
  {path:'gestion/tabs',component: GestionTabsComponent},
  {path:'gestion/productos',component: GestionproductosComponent},
  {path:'gestion/crearproducto',component: CrearProductoComponent},
  {path:'gestion/usuarios',component: GestionUsuariosComponent},

  {path:'login',component: LoginComponent},
  {path:'newuser',component: NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
