import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LegacyProject';
  constructor(public auth: AuthService){}
}
C:\Users\ASUS\OneDrive\Desktop\legacy-project\legacy-project\legay-project\data