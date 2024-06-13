import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.page.html',
  styleUrls: ['./presence.page.scss'],
})
export class PresencePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfilPage(){
    this.router.navigate(['/profil']); }

  goToPasserPage(){
    this.router.navigate(['/passer']);
  }

  goToVenirPage(){
    this.router.navigate(['/venir']);
  }

  goToCreditPage(){
    this.router.navigate(['/credit']);
  }

  goToReclamPage(){
    this.router.navigate(['/claim-doct']);
  }

}
