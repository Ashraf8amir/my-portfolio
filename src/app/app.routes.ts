import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './projects/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent},
    { path: '**', component: NotfoundComponent }
];
