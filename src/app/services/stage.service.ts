import { Injectable } from '@angular/core';
import { Internship } from '../shared/models/internship.model';
@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor() { }
  
  private internships: Internship[] = [
    {
      id: '1',
      titre: 'Développeur Web',
      description: 'Développement d\'une application web.',
      domaine: 'Informatique',
      duree: '3 mois',
    
    },
    {
      id: '2',
      titre: 'Développeur Mobile',
      description: 'Création d\'applications mobiles.',
      domaine: 'Informatique',
      duree: '2 mois',
      
      
    },
    {
      id: '3',
      titre: 'Assistant Marketing Digital',
      description: 'Community management et publicité.',
      domaine: 'Marketing',
      duree: '2 mois',
     
    }
  ];
  // Obtenir tous les stages
  getAllInternships(): Internship[] {
    return this.internships;
  }

  // Obtenir les stages filtrés par domaine
  getInternshipsByDomaine(domaine: string): Internship[] {
    return this.internships.filter(i => i.domaine === domaine);
  }

  // Obtenir tous les domaines uniques (utile pour un <select>)
  getDomaines(): string[] {
    return [...new Set(this.internships.map(i => i.domaine))];
  }
}

