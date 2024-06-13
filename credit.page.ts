import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/claim-doct']);
  }

  goToProfilPage(){
    this.router.navigate(['/profil']); }

  goToPasserPage(){
    this.router.navigate(['/passer']);
  }

  goToVenirPage(){
    this.router.navigate(['/venir']);
  }

  goToPresencePage(){
    this.router.navigate(['/presence']);
  }

  goToReclamPage(){
    this.router.navigate(['/claim-doct']);
  }
 

}