import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showLogo = true;

  constructor(private router: Router) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.goToUserPage();
    }, 3000);
  }

  goToUserPage() {
    this.router.navigate(['/user']);
  }

}