import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
  ]
})
export class ContactComponent implements OnInit {
  constructor(
    private titleService: Title,
    private scrollService: ScrollService
  ) {
    this.titleService.setTitle('BC | Contact')
  }

  ngOnInit(): void {
    this.scrollService.scrollToTopInstant();

    // تحقق إذا كانت الصفحة تم تحميلها عن طريق refresh
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
      this.scrollService.handleRefresh();
    }
  }
}
