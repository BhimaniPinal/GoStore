import { MatListModule } from '@angular/material/list';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [MatIconModule, MatListModule],
})
export class SidebarComponent {
  constructor(private router: Router) {}
}
