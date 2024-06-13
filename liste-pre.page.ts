import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-pre',
  templateUrl: './liste-pre.page.html',
  styleUrls: ['./liste-pre.page.scss'],
})
export class ListePrePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfilAdmPage(){
    this.router.navigate(['/profil-admin']);
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
    this.router.navigate(['/claim-admin']);
  }

  goToScanPage(){
    this.router.navigate(['/scan']);
  }


}
