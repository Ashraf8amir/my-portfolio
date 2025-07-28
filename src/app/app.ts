import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('test-ng');

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.scrollToTopInstant();
  }
}
