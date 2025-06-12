import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <router-outlet/>
  `
})
export class App {
  protected title = 'ng-auth-0';
}
