import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

/* Module Dependencies */

/* Containers */

/* Components */
import { HomeComponent } from './home/home.component';

/* Services */

/* Routes */

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }

    ], { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [],
  providers: [],
  exports:  [ RouterModule ]
})

export class RoutingModule {}
