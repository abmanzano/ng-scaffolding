import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular Scaffolding';
  ngVersion = 'Angular 9.1.4';
  bootstrapVersion = 'Bootstrap 4.4.1';
  ngBootstrapVersion = 'ng-bootstrap 6.1.0';

  images = [702, 631, 857].map((n) => `https://picsum.photos/id/${n}/1500/500`);

  faCoffee = faCoffee;
}
