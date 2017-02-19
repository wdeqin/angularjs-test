import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="grid grid-pad">
    <a *ngFor="let hero of heroes"  [routerLink]="['/detail', hero.id]"  class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
    </a>
    </div>
    <hero-search></hero-search>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heros">Heros</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css',],
})

export class AppComponent {
  title = 'Tour of Heros';
}
