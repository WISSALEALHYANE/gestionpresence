import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-admin',
  templateUrl: './claim-admin.page.html',
  styleUrls: ['./claim-admin.page.scss'],
})
export class ClaimAdminPage implements OnInit {

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


  goToScanPage(){
    this.router.navigate(['/scan']);
  }

  goToListPrePage(){
    this.router.navigate(['/liste-pre']);
  }

}
