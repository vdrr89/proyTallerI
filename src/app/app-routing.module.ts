import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { CajaComponent } from './caja/caja.component';
import { GestionproductosComponent } from './gestionproductos/gestionproductos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './login/new-user/new-user.component';
import { CrearproductoComponent } from './gestionproductos/crearproducto/crearproducto.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'productos',component: ProductosComponent},
  {path:'caja',component: CajaComponent},
  {path:'gestionproductos',component: GestionproductosComponent},
  {path:'login',component: LoginComponent},
  {path:'newuser',component: NewUserComponent},
  {path:'crearproducto',component: CrearproductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
