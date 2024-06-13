import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-doct',
  templateUrl: './claim-doct.page.html',
  styleUrls: ['./claim-doct.page.scss'],
})
export class ClaimDoctPage implements OnInit {

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

  goToPresencePage(){
    this.router.navigate(['/presence']);
  }

}
