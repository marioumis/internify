import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { stagiaireRoutes } from './stagiaire/stagiaire.routes';
import { authRoutes } from './auth/auth.routes';
export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent ,
  },
  {
    path: 'stagiaire/internships',
     loadChildren: () => import('./stagiaire/stagiaire.routes').then(m => m.stagiaireRoutes)  },
  {
  path: 'auth',
  loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes)
},
   
  {
    path: '**',
    redirectTo: ''
  }
];
