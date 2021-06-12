import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//comun
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CajaComponent } from './caja/caja.component';
//comun users
import { LoginTabsComponent } from './login/login-tabs/login-tabs.component';
import { LoginComponent } from './login/login.component';
import { NewUserTabsComponent } from './login/new-user/new-user-tabs/new-user-tabs.component';
import { NewUserComponent } from './login/new-user/new-user.component';
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
  {path:'breadcrumb',component: BreadcrumbComponent},
  {path:'',component: HomeComponent},
  {path:'productos',component: ProductosComponent},
  {path:'caja',component: CajaComponent},

  {path:'gestion',component: GestionComponent},
  {path:'gestion/tabs',component: GestionTabsComponent},
  {path:'gestion/productos/filtro',component: GestionProductosFiltroComponent},
  {path:'gestion/productos',component: GestionproductosComponent},
  {path:'gestion/crearproducto',component: CrearProductoComponent},
  {path:'gestion/usuarios/filtro',component: GestionUsuariosFiltroComponent},
  {path:'gestion/usuarios',component: GestionUsuariosComponent},
  {path:'gestion/usuarios/crearusuario',component: CrearUsuarioComponent},

  {path:'login/tabs',component: LoginTabsComponent},
  {path:'login',component: LoginComponent},
  {path:'newuser',component: NewUserComponent},
  {path:'newuser/tabs',component: NewUserTabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
