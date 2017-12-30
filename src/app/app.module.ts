import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Module Dependencies */
import { RoutingModule } from './app.routing';

/* Containers */

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

/* Services */

/* Routes */

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,

    HomeComponent,
    NavComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
