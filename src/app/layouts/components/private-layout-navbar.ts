import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { iMenuItem } from '@interfaces/index';

@Component({
  selector: 'private-layout-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="navbar bg-base-300 shadow-lg">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" routerLink="/dashboard"
          >Ng <span class="text-primary">Auth 0</span>
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          @for (item of menuItems(); track $index) {
          <li>
            <a
              class="link link-hover link-primary mr-0.5"
              [routerLink]="item.path"
              routerLinkActive="link link-secondary"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              <i [class]="item.icon"></i>
              {{item.title}}
            </a>
          </li>
          }
          
          <li>
            <button class="link link-hover link-primary">
              <i class="fas fa-sign-out-alt"></i>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class PrivateLayoutNavbar {
  public menuItems = computed((): iMenuItem[] => [
    {
      title: 'Dashboard',
      path: '/private',
      icon: 'fas fa-tachometer-alt',
    },
    {
      title: 'Profile',
      path: '/private/profile',
      icon: 'fas fa-user',
    },
  ]);
}
