import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'private-dashboard-page',
  imports: [],
  template: `
    <div class="min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <!-- Welcome Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold">Dashboard Privado</h1>
          <p class="text-lg opacity-80">
            ¡Felicidades! Has accedido exitosamente al área privada.
          </p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="stat bg-base-200 rounded-lg">
            <div class="stat-title">Tutorial</div>
            <div class="stat-value text-primary">Auth0</div>
            <div class="stat-desc">Autenticación segura</div>
          </div>

          <div class="stat bg-base-200 rounded-lg">
            <div class="stat-title">Framework</div>
            <div class="stat-value text-secondary">Angular</div>
            <div class="stat-desc">Versión 20</div>
          </div>

          <div class="stat bg-base-200 rounded-lg">
            <div class="stat-title">Estado</div>
            <div class="stat-value text-success">Activo</div>
            <div class="stat-desc">Sesión autenticada</div>
          </div>
        </div>


      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateDashboardPage {}

export default PrivateDashboardPage;
