import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.page.html',
  styleUrls: ['./profil-admin.page.scss'],
})
export class ProfilAdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAjoutPage(){
    this.router.navigate(['/ajouter']);
  }

  goToPasserPage(){
    this.router.navigate(['/passer']);
  }

  goToVenirPage(){
    this.router.navigate(['/venir']);
  }

  goToReclamPage(){
    this.router.navigate(['/reclamation']);
  }

  goToParamPage(){
    this.router.navigate(['/parametre']);
  }

  goToScanPage(){
    this.router.navigate(['/scan']);
  }

  goToListPrePage(){
    this.router.navigate(['/liste-pre']);
  }

}
