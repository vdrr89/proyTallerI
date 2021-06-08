import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ''; //acá va lo que en el app component puedo poner entre {{title}}
  link2 = 'Productos';
  link3 = 'Gestión'; // este tednría que verse solo x los admins
  rightbtn = 'Login';

}
