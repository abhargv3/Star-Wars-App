import { Component } from '@angular/core';
import { PeopleService } from "app/people.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PeopleService]
})
export class AppComponent {
  title = 'Star Wars App!';
}
