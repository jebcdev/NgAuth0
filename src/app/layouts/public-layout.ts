import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicLayoutNavbar } from './components';

@Component({
  selector: 'public-layout',
  imports: [RouterOutlet,PublicLayoutNavbar],
  template: `
    <div>
      <header>
        <public-layout-navbar />
      </header>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayout {}

export default PublicLayout;
