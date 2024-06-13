import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  selectedImage: string = 'assets/profile-picture.jpg';

  constructor(private router: Router) { }


  uploadImage(event: any) {
    const file = event.target.files[0];
    this.selectedImage = URL.createObjectURL(file);
  }

  ngOnInit() {
  }

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

  goToReclamPage(){
    this.router.navigate(['/reclamation']);
  }

}
