import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'public-about-page',
  imports: [],
  template: `
    <div class="min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Acerca del Tutorial</h1>
          <p class="text-lg opacity-80">
            Todo lo que necesitas saber sobre este proyecto educativo
          </p>
        </div>

        <!-- About Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Column -->
          <div class="space-y-6">
            <div class="card bg-base-200">
              <div class="card-body">
                <h2 class="card-title">¿Qué es este proyecto?</h2>
                <p>
                  Este es un proyecto de Angular diseñado específicamente para
                  enseñar la implementación de Auth0 de manera práctica y
                  profesional.
                </p>
                <p>
                  Incluye ejemplos reales, mejores prácticas y todo el código
                  necesario para integrar autenticación segura en tus
                  aplicaciones.
                </p>
              </div>
            </div>
            <div class="card bg-base-200">
              <div class="card-body">
                <h2 class="card-title">Tecnologías Utilizadas</h2>
                <div class="flex flex-wrap gap-2">
                  <div class="badge badge-outline">Angular 20</div>
                  <div class="badge badge-outline">Auth0 SDK</div>
                  <div class="badge badge-outline">TypeScript</div>
                  <div class="badge badge-outline">Tailwind CSS</div>
                  <div class="badge badge-outline">DaisyUI</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6">
            <div class="card bg-base-200">
              <div class="card-body">
                <h2 class="card-title">Sobre Mi</h2>
                <p class="font-semibold">JEBC-Dev</p>
                <p>Desarrollador apasionado.</p>
                <p>
                  Canal de YouTube: &#64;jebcdev - Donde encontrarás un poco más
                  de contenido.
                </p>
              </div>
            </div>

            <div class="card bg-base-200">
              <div class="card-body">
                <h2 class="card-title">Objetivos del Tutorial</h2>
                <ul class="list-disc list-inside space-y-2">
                  <li>Configurar Auth0 correctamente</li>
                  <li>Implementar login y logout</li>
                  <li>Proteger rutas privadas</li>
                  <li>Manejar estados de autenticación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-12">
          <div class="card bg-primary text-primary-content">
            <div class="card-body">
              <h2 class="card-title justify-center">¿Listo para empezar?</h2>
              <p>
                Este tutorial te guiará paso a paso para implementar Auth0 en tu
                aplicación Angular de manera profesional.
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
export class PublicAboutPage {}

export default PublicAboutPage;
