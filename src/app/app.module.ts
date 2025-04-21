import { NgModule, isDevMode } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "@app/app.routes";

@NgModule({

  imports: [
    // routing
    RouterModule.forRoot(routes, { useHash: true }),

    // pwa
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ReactiveFormsModule,
  ],
})
export class AppModule { }
