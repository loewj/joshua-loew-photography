import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fade } from './types/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fade
  ]
})
export class AppComponent {

  title = 'joshua-loew-photography';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
  
}
