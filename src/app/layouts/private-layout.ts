import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrivateLayoutNavbar } from './components';

@Component({
  selector: 'private-layout',
  imports: [RouterOutlet, PrivateLayoutNavbar],
  template: `
    <div>
      <header>
        <private-layout-navbar />
      </header>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayout {}

export default PrivateLayout;
