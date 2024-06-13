import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import{ FormationService} from '../services/formation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

formation:any;
  constructor(private router: Router, private formationService: FormationService) { }

 

  ngOnInit() {
    this.loadAssignedFormations();
  }

  loadAssignedFormations(){

    this.formationService.getAssignedFormations().subscribe(data => {
      this.formation = data;
    }, error =>{
      console.error('Erreur lors de la récupération des formations assignées', error);
    }
  );

  }

  unvalidateParticipation(formationId: string, moduleId: string, doctorantId: string){
    this.formationService.unvalidateParticipation(formationId, moduleId, doctorantId).subscribe(()=>{
      console.log('paricipation invalidée avec succès par QR');
    }, error => {
      console.error('erreur lors de l\'invalidation de la participation par QR', error);
    });
  }

  validateParticipationByCin(formationId: string, moduleId: string, cin: string ){
    this.formationService.validateParticipationByCin(formationId,moduleId, cin).subscribe(()=>{
      console.log('Participation validée avec succès par cin');
    }, error =>{
      console.error('erreur lors de la validation de la participation par cin ', error);
    });
  }

  unvalidateParticipationByCin(formationId: string, moduleId: string, cin: string){
    this.formationService.unvalidateParticipationByCin(formationId, moduleId, cin).subscribe(()=>{
      console.log('participation invalidée avec succès par cin');
    }, error => {
      console.error('erreur lors de l\'invalidation de la participation par cin', error);
    });
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

  goToListPrePage(){
    this.router.navigate(['/liste-pre']);
  }

}