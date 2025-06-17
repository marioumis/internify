import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule ,HeaderComponent,FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private router: Router) {}
  
  goStages(): void {
    this.router.navigate(['/stagiaire/internships/internship-list']);
  }

}
