import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  onNavClick(): void {
    this.scrollService.scrollToTop();
  }
}
