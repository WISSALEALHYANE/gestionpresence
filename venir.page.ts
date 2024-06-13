import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venir',
  templateUrl: './venir.page.html',
  styleUrls: ['./venir.page.scss'],
})
export class VenirPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfilPage(){
    this.router.navigate(['/profil']); }

  goToPasserPage(){
    this.router.navigate(['/passer']);
  }

  goToCreditPage(){
    this.router.navigate(['/credit']);
  }

  goToPresencePage(){
    this.router.navigate(['/presence']);
  }

  goToReclamPage(){
    this.router.navigate(['/claim-doct']);
  }


}