import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ''; //acá va lo que en el app component puedo poner entre {{title}}
  link1 = 'Home';
  link2 = 'Productos';
  link3 = 'Gestión';
  link4 = 'Caja'
  rightbtn = 'Login';

}
