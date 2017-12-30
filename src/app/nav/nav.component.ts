import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">{{ appName }}</a>
        </div>
      </div>
    </nav>
  `
})

export class NavComponent {
  appName: string = "Angular Boilerplate";
}
