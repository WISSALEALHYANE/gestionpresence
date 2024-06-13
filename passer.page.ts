import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passer',
  templateUrl: './passer.page.html',
  styleUrls: ['./passer.page.scss'],
})
export class PasserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfilPage(){
    this.router.navigate(['/profil']); }
    

  goToVenirPage(){
    this.router.navigate(['/venir']);
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