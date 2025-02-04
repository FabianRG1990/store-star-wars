import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarWarsComponent } from '@store-star-wars-ws/store';

@Component({
  imports: [RouterModule, StarWarsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'star-wars-app';
}
