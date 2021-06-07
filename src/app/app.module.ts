import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { CajaComponent } from './caja/caja.component';
import { GestionproductosComponent } from './gestionproductos/gestionproductos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CajaComponent,
    GestionproductosComponent,
    HomeComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
