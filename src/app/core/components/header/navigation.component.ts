import { Component } from '@angular/core';

@Component({
  selector: 'od-navigation',
  template: `
    <nav>
      <a [routerLinkActiveOptions]="{ exact: true }" [routerLinkActive]="'active'" [routerLink]="['/']">Front page</a>
      <a [routerLinkActiveOptions]="{ exact: true }" [routerLinkActive]="'active'" [routerLink]="['/second']">Second page</a>
      <a [routerLinkActiveOptions]="{ exact: true }" [routerLinkActive]="'active'" [routerLink]="['/second/third']">Third page inside second page</a>
    </nav>
  `
})
export class NavigationComponent {
}
