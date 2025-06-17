import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StageService } from '../../../services/stage.service';
import { Internship } from '../../../shared/models/internship.model';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import {AuthService} from "../../../services/AuthService/services.service";
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-internship-list',
  standalone: true,
  imports: [RouterOutlet ,CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './internship-list.component.html',
})
export class InternshipListComponent implements OnInit {
  private StageService = inject(StageService);
  authService = inject(AuthService);
  router = inject(Router);
  allInternships: Internship[] = [];
  domaines: string[] = [];
  selectedDomaine: string = '';

  ngOnInit(): void {
    this.allInternships = this.StageService.getAllInternships();
    this.domaines = this.StageService.getDomaines();
  }

  get filteredInternships(): Internship[] {
    if (!this.selectedDomaine) return this.allInternships;
    return this.StageService.getInternshipsByDomaine(this.selectedDomaine);
  }
  postuler(stageId: string): void {
    alert('Navigation !');  
    console.log("🟢 Bouton 'Postuler' cliqué pour le stage :", stageId);
  //if (this.authService.isConnected()) {
   // this.router.navigate([`/stagiaire/internships/${stageId}/postuler`]);
  //} else {
   // this.router.navigate(['/auth/login']);
 // }
}

}
