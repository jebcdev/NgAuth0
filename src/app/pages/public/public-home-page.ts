import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'public-home-page',
  imports: [],
  template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <div class="hero min-h-80">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Angular + Auth0</h1>
            <p class="py-6">
              Tutorial completo de implementación de autenticación segura en
              aplicaciones Angular utilizando Auth0.
            </p>
            <p class="text-sm opacity-70">Por JEBC-Dev | Canal: &#64;jebcdev</p>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="container mx-auto px-4 py-4">
        <h2 class="text-3xl font-bold text-center mb-8">¿Qué aprenderás?</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-base-200 shadow-sm">
            <div class="card-body">
              <h3 class="card-title">Configuración</h3>
              <p>
                Aprende a configurar Auth0 en tu aplicación Angular desde cero
                de manera correcta y segura.
              </p>
            </div>
          </div>

          <div class="card bg-base-200 shadow-sm">
            <div class="card-body">
              <h3 class="card-title">Autenticación</h3>
              <p>
                Implementa login, logout y manejo de tokens de forma
                profesional.
              </p>
            </div>
          </div>

          <div class="card bg-base-200 shadow-sm">
            <div class="card-body">
              <h3 class="card-title">Protección de Rutas</h3>
              <p>
                Protege tus rutas privadas con guards y controla el acceso a tu
                aplicación.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHomePage {}

export default PublicHomePage;
