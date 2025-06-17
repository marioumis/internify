import { Routes } from '@angular/router';
import { StagiaireComponent } from './stagiaire.component';
import { InternshipListComponent } from './internships/internship-list/internship-list.component';
import { InternshipDetailComponent } from './internships/internship-detail/internship-detail.component';
import { PostulationFormComponent } from './internships/postulation-form/postulation-form.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
export const stagiaireRoutes: Routes = [
{ path: 'internship-list', loadComponent: () => import('./internships/internship-list/internship-list.component').then(m => m.InternshipListComponent) },
  { path:'internship-detail', component : InternshipDetailComponent},
{
  path: 'internships/postulation-form/:id/postuler',
  loadComponent: () => import('./internships/postulation-form/postulation-form.component').then(m => m.PostulationFormComponent)
},
   {path : 'candidatures', component :CandidaturesComponent}
];

