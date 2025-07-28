import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
  ]
})

export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private scrollService: ScrollService
  ) {
    this.titleService.setTitle('Ashraf Samir | Home')
  }

  ngOnInit(): void {
    this.scrollService.scrollToTopInstant();

    // تحقق إذا كانت الصفحة تم تحميلها عن طريق refresh
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
      this.scrollService.handleRefresh();
    }
  }
}
