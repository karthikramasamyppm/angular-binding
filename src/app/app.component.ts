import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Binding Learning';
  name = 'Angular';
  firstname = 'Karthik';
  lastname = 'Ramasamy';
  country = 'India';
  count=0
  clickMe()
  {
   this.count++
  }
}
