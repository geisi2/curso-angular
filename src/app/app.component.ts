import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Geisiane';
  userData = {
    email: 'geisiane.sj2@gmail.com',
    funcao: 'Adimin'
  }
  title = 'curso-angular';

}
