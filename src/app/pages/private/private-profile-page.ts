import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppAuthService } from '@services/app-auth.service';

@Component({
  selector: 'private-profile-page',
  imports: [AsyncPipe],
  template: `
    <div class="min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold">Perfil de Usuario</h1>
          <p class="text-lg opacity-80">Información del usuario autenticado</p>
        </div>
@if(authService.user$ | async; as user) {
        <!-- Profile Card -->
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title mb-6">Información Básica</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-control flex items-center justify-between">
                <label class="label">
                  <span class="label-text font-semibold">Nombre Completo</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                  [value]=" user?.name "
                  readonly
                />
              </div>

              <div class="form-control flex items-center justify-between">
                <label class="label">
                  <span class="label-text font-semibold"
                    >Correo Electrónico</span
                  >
                </label>
                <input
                  type="email"
                  class="input input-bordered"
                  [value]="user.email"
                  readonly
                />
              </div>

              <div class="form-control flex items-center justify-between">
                <label class="label">
                  <span class="label-text font-semibold"
                    >Fecha de Registro</span
                  >
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                  value="2024-01-15"
                  readonly
                />
              </div>

              <div class="form-control flex items-center justify-between">
                <label class="label">
                  <span class="label-text font-semibold">Último Acceso</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                  value="Hoy"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateProfilePage {
      authService: AppAuthService = inject(AppAuthService);

}

export default PrivateProfilePage;
