import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {
    // عند refresh الصفحة، انتقل إلى الأعلى
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('scrollToTop', 'true');
    });

    // عند تحميل الصفحة، تحقق إذا كان يجب التمرير إلى الأعلى
    window.addEventListener('load', () => {
      if (sessionStorage.getItem('scrollToTop') === 'true') {
        window.scrollTo(0, 0);
        sessionStorage.removeItem('scrollToTop');
      }
    });

    // طريقة إضافية للتمرير إلى الأعلى عند تحميل الصفحة
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
      window.scrollTo(0, 0);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToTopInstant(): void {
    window.scrollTo(0, 0);
  }

  handleRefresh(): void {
    window.scrollTo(0, 0);
  }
}
