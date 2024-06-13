import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { LoadingController } from '@ionic/angular';  
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorantService } from '../doctorant.service';


@Component({
  selector: 'app-add-doct',
  templateUrl: './add-doct.page.html',
  styleUrls: ['./add-doct.page.scss'],
})
export class AddDoctPage implements OnInit {
  
  doct = {
    nom:'',
    prenom:'',
    cin:'',
    email:'',
    modpass:''
  }
  doctForm:FormGroup;
  constructor(
    private firestore: AngularFirestore, 
    private router: Router,
    public loadingCtrl: LoadingController, 
    public authService: AuthenticationService,
    public afAuth: AngularFireAuth,
    private doctorantService : DoctorantService,
    private fb : FormBuilder,

  ) { }

  ngOnInit() { 

  }

 async saveDoct() : Promise <void> {
  const loading = await this.loadingCtrl.create();
  await loading.present();
  console.log(this.doct);
  try{
    //AJOUTER LE DOCTORANT A FIIRESTORE
     await this.firestore
       .collection('docts')
       .add(this.doct).then(() => {

    });
// Créer l'utilisateur dans Firebase Authentication
await this.afAuth.createUserWithEmailAndPassword(this.doct.email, this.doct.modpass);

this.doct = {
  nom: '',
  prenom: '',
  cin: '',
  email: '',
  modpass:'',
};

loading.dismiss();
      // Rediriger ou afficher un message de succès
      this.router.navigate(['/some-page']); // Remplacez '/some-page' par la route désirée

}
catch (error) {
  console.error(error);
  loading.dismiss();
}


}}
