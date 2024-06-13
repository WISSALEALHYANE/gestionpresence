import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DoctorantService } from 'src/app/doctorant.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
  @Input() doctorantId: string;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private doctorantService: DoctorantService
  ) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.doctorantService.getDoctorantById(this.doctorantId).subscribe((doctorant: any) => {
      if (doctorant) {
        this.editForm.setValue({
          nom: doctorant.nom,
          prenom: doctorant.prenom,
          cin: doctorant.cin,
          email: doctorant.email,
          password: doctorant.password
        });
      }
    });
  }

  submitForm() {
    if (this.editForm.valid) {
      this.doctorantService.updateDoctorant(this.doctorantId, this.editForm.value).then(() => {
        console.log('Doctorant mis à jour avec succès !');
        this.dismiss();
      }).catch((error) => {
        console.error('Erreur lors de la mise à jour du doctorant : ', error);
      });
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }
}