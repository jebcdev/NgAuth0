import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
/*  */

import { iMenuItem } from '@interfaces/index';
import { AppAuthService } from '@services/index';
@Component({
  selector: 'public-layout-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="navbar bg-base-200 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" routerLink="/"
          >Ng <span class="text-accent">Auth 0</span>
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
              {{ item.title }}
            </a>
          </li>
          }
          <li>
            <button class="link link-hover link-primary"
            (click)="authService.login()">
              <i class="fas fa-sign-out-alt"></i>
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class PublicLayoutNavbar {
  authService: AppAuthService = inject(AppAuthService);
  public menuItems = computed((): iMenuItem[] => [
    {
      title: 'Home',
      path: '',
      icon: 'fas fa-home',
    },
    {
      title: 'About',
      path: 'about',
      icon: 'fas fa-info-circle',
    },
  ]);
}
