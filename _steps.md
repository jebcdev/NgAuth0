# Angular + Auth0 Implementation Guide

## Pasos para implementar Auth0 en Angular

### 1. Instalación de dependencias

```bash
npm install @auth0/auth0-angular
```

### 2. Configuración del entorno

Crear archivos de environment con las credenciales de Auth0:

**src/environments/environment.ts**

```typescript
export const environment = {
  production: false,
  auth0domain: "tu-dominio.us.auth0.com",
  auth0clientId: "tu-client-id",
};
```

**src/environments/environment.development.ts**

```typescript
export const environment = {
  production: false,
  auth0domain: "tu-dominio.us.auth0.com",
  auth0clientId: "tu-client-id",
};
```

### 3. Configuración en app.config.ts

Agregar el proveedor de Auth0 en la configuración de la aplicación:

```typescript
import { provideAuth0 } from "@auth0/auth0-angular";
import { environment } from "@env/environment";

const { auth0domain, auth0clientId } = environment;

export const appConfig: ApplicationConfig = {
  providers: [
    // ...otros providers
    provideAuth0({
      domain: auth0domain,
      clientId: auth0clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
```

### 4. Crear el servicio de autenticación

**src/app/services/app-auth.service.ts**

```typescript
import { inject, Injectable } from "@angular/core";
import { AuthService as Auth0Service } from "@auth0/auth0-angular";

@Injectable({
  providedIn: "root",
})
export class AppAuthService {
  private _auth0Service: Auth0Service = inject(Auth0Service);

  // Exponer los observables directamente
  public user$ = this._auth0Service.user$;
  public isAuthenticated$ = this._auth0Service.isAuthenticated$;
  public isLoading$ = this._auth0Service.isLoading$;

  public login(): void {
    this._auth0Service.loginWithRedirect();
  }

  public logout(): void {
    this._auth0Service.logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }
}
```

**Puntos importantes del servicio:**

- ✅ Expone los observables de Auth0 directamente
- ✅ No se suscribe a los observables en el servicio
- ✅ Usa `loginWithRedirect()` para mejor UX
- ✅ Configura `returnTo` en logout

### 5. Crear el guard de autenticación

**src/app/guards/is-authenticated-guard.ts**

```typescript
import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { AppAuthService } from "@services/app-auth.service";
import { map } from "rxjs/operators";

export const isAuthenticatedGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AppAuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        authService.login();
        return false;
      }
      return true;
    })
  );
};
```

**Características del guard:**

- ✅ Usa `CanMatchFn` para proteger rutas
- ✅ Retorna un Observable<boolean>
- ✅ Inicia login automáticamente si no está autenticado
- ✅ Usa `map` operator para transformar el observable

### 6. Configurar las rutas protegidas

**src/app/app.routes.ts**

```typescript
import { Routes } from "@angular/router";
import { isAuthenticatedGuard } from "@guards/is-authenticated-guard";

export const routes: Routes = [
  {
    title: "Ng Auth 0",
    path: "",
    loadChildren: () => import("@routes/public.routes"),
  },
  {
    canMatch: [isAuthenticatedGuard], // Proteger rutas privadas
    title: "Private",
    path: "private",
    loadChildren: () => import("@routes/private.routes"),
  },
  {
    title: "Not Found",
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];
```

### 7. Implementar en componentes

**Navbar Público - Mostrar Login/Dashboard**

```typescript
@Component({
  selector: "public-layout-navbar",
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="navbar bg-base-200 shadow-sm">
      <!-- ...resto del navbar... -->
      <li>
        @if (authService.isAuthenticated$ | async) {
        <a class="link link-hover link-success" routerLink="/private">
          <i class="fas fa-tachometer-alt"></i>
          Dashboard
        </a>
        } @else {
        <button class="link link-hover link-primary" (click)="authService.login()">
          <i class="fas fa-sign-in-alt"></i>
          Login
        </button>
        }
      </li>
    </div>
  `,
})
export class PublicLayoutNavbar {
  authService: AppAuthService = inject(AppAuthService);
}
```

**Navbar Privado - Mostrar Logout y Usuario**

```typescript
@Component({
  selector: "private-layout-navbar",
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="navbar bg-base-300 shadow-lg">
      <!-- ...resto del navbar... -->
      <li>
        <button class="link link-hover link-error" (click)="authService.logout()">
          <i class="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </li>

      @if (authService.user$ | async; as user) {
      <div class="avatar placeholder ml-4">
        <div class="bg-neutral text-neutral-content rounded-full w-8">
          <img [src]="user.picture" [alt]="user.name" />
        </div>
      </div>
      }
    </div>
  `,
})
export class PrivateLayoutNavbar {
  authService: AppAuthService = inject(AppAuthService);
}
```

### 8. Buenas prácticas implementadas

#### ✅ Manejo de Observables

- Usar `async` pipe en templates
- No suscribirse en servicios innecesariamente
- Exponer observables directamente desde Auth0

#### ✅ Guards

- Usar `CanMatchFn` para lazy loading
- Manejar redirecciones apropiadas
- Integrar con el flujo de Auth0

#### ✅ UX/UI

- Mostrar estados de loading
- Feedback visual del estado de autenticación
- Navegación condicional

#### ✅ Seguridad

- Proteger rutas sensibles
- Configurar redirects correctos
- Manejar logout apropiadamente

### 9. Configuración en Auth0 Dashboard

**Allowed Callback URLs:**

```
http://localhost:4200
```

**Allowed Logout URLs:**

```
http://localhost:4200
```

**Allowed Web Origins:**

```
http://localhost:4200
```

### 10. Testing

Para probar la implementación:

1. **Login Flow:**

   - Acceder a ruta privada → Redirige a Auth0
   - Login exitoso → Regresa a la aplicación
   - Verificar que aparece en navbar privado

2. **Logout Flow:**

   - Click en logout → Redirige a Auth0
   - Logout exitoso → Regresa a home público

3. **Protección de Rutas:**
   - Sin autenticación → No puede acceder a `/private`
   - Con autenticación → Acceso completo

### 11. Errores comunes y soluciones

#### ❌ Error: "Cannot read properties of undefined"

**Solución:** Usar async pipe y verificaciones condicionales

```typescript
@if (authService.user$ | async; as user) {
  {{ user.name }}
}
```

#### ❌ Error: Guard no funciona

**Solución:** Verificar que el guard retorna Observable<boolean>

```typescript
return authService.isAuthenticated$.pipe(map((isAuthenticated) => isAuthenticated));
```

#### ❌ Error: Redirect loop

**Solución:** Verificar configuración de URLs en Auth0 Dashboard

### 12. Recursos adicionales

- [Auth0 Angular SDK Docs](https://auth0.com/docs/libraries/auth0-angular)
- [Angular Guards Documentation](https://angular.io/guide/router-guards)
- [RxJS Operators](https://rxjs.dev/guide/operators)

---

## Resumen

Esta implementación proporciona:

- ✅ Autenticación segura con Auth0
- ✅ Protección de rutas privadas
- ✅ Manejo apropiado de estados
- ✅ UX fluida con feedback visual
- ✅ Buenas prácticas de Angular y RxJS
