import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { ModalController } from '@ionic/angular';
import { ModifierPage } from '../modifier/modifier.page';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {
  docts: any ;

  searchTerm: string = '';
  filteredItems: any[] = [];

  items: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // Ajoutez plus d'éléments ici
  ];


  constructor( public formBuilder: FormBuilder, public loadingCtrl: LoadingController, 
    public authService: AuthenticationService, public router: Router,
    public firestore :AngularFirestore, private modalController: ModalController) { 

      this.filteredItems = this.items;

      this.firestore
      .collection("docts")
      .valueChanges({idField: 'doctId'})
      .subscribe((user) => {
        this.docts=user;
        console.log(user);
      });

      this.docts = [
        { id: '1', nom: 'doct 1', description: 'Description 1' },
        { id: '2', nom: 'doct 2', description: 'Description 2' },
        { id: '3', nom: 'doct 3', description: 'Description 3' },
        { id: '4', nom: 'doct 4', description: 'Description 4' },
        { id: '5', nom: 'doct 5', description: 'Description 5' },
        { id: '6', nom: 'doct 6', description: 'Description 6' },
        { id: '7', nom: 'doct 7', description: 'Description 7' },
        { id: '8', nom: 'doct 8', description: 'Description 8' },
        { id: '9', nom: 'doct 9', description: 'Description 9' },
  
        // Ajoutez d'autres docts ici
      ];
    
  }

   

  onSearch() {
   
  }

  ngOnInit() {
  }

  async openEditModal(doctorantId: string) {
    const modal = await this.modalController.create({
      component: ModifierPage,
      componentProps: { doctorantId }
    });
    await modal.present();
}

deleteDoctorant(doctorantId: string) {
  this.firestore.collection('docts').doc(doctorantId).delete();
}


  goToAddDoctPage(){
    this.router.navigate(['/add-doct']);
  }
  goToProfilPage(){
    this.router.navigate(['/profil']);
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
