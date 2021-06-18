import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//comun
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
//SHARED
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './gral/home/home.component';
import { ProductosComponent } from './gral/productos/productos.component'
//comun users
import { LoginComponent } from './gral/login/login.component';
import { LoginTabsComponent } from './gral/login/login-tabs/login-tabs.component'
import { NewUserTabsComponent } from './gral/login/new-user/new-user-tabs/new-user-tabs.component';
import { NewUserComponent } from './gral/login/new-user/new-user.component';
//gestion
import { GestionComponent } from './gestion/gestion.component';
import { GestionTabsComponent } from './gestion/gestion-tabs/gestion-tabs.component';
//gestion productos
import { GestionProductosFiltroComponent } from './gestion/gestionproductos/gestion-productos-filtro/gestion-productos-filtro.component';
import { GestionproductosComponent } from './gestion/gestionproductos/gestionproductos.component';
import { CrearProductoComponent } from './gestion/gestionproductos/crear-producto/crear-producto.component';
//gestion usuarios
import { GestionUsuariosFiltroComponent } from './gestion/gestion-usuarios/gestion-usuarios-filtro/gestion-usuarios-filtro.component';
import { GestionUsuariosComponent } from './gestion/gestion-usuarios/gestion-usuarios.component';
import { CrearUsuarioComponent } from './gestion/gestion-usuarios/crear-usuario/crear-usuario.component';

const routes: Routes = [
  //general
  {path:'breadcrumb',component: BreadcrumbComponent},
  //SHARED
  {path:'',component: HomeComponent},
  //.. usuarios
  {path:'login/tabs',component: LoginTabsComponent},
  {path:'login',component: LoginComponent},
  {path:'newuser',component: NewUserComponent},
  {path:'newuser/tabs',component: NewUserTabsComponent},
  //.. productos
  {path:'productos',component: ProductosComponent},
  {path:'gestion/productos/filtro',component: GestionProductosFiltroComponent},
  //GESTION
  {path:'gestion',component: GestionComponent},
  {path:'gestion/tabs',component: GestionTabsComponent},
  //.. usuarios
  {path:'gestion/usuarios/filtro',component: GestionUsuariosFiltroComponent},
  {path:'gestion/usuarios',component: GestionUsuariosComponent},
  {path:'gestion/usuarios/crearusuario',component: CrearUsuarioComponent},
  //.. productos
  {path:'gestion/productos',component: GestionproductosComponent},
  {path:'gestion/crearproducto',component: CrearProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
