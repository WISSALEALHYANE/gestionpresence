import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import { Router } from '@angular/router';
import{ Platform} from '@ionic/angular';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  public showCamera = false;
  public textScanned: string = '';

  constructor( private qrScanner: QRScanner , private router: Router, private platform: Platform) { 
    
  }

  ngOnInit() {
  }

  //scancode() {
  //  this.showCamera = true;
  //  this.qrScanner.prepare()
  //  .then((status: QRScannerStatus) => {
  //     if (status.authorized) {
         // camera permission was granted
  
         // start scanning
  //       let scanSub = this.qrScanner.scan().subscribe((text: any) => {
  //         console.log('Scanned something', text);

 //          this.textScanned = text.result;
  
  //         this.qrScanner.hide(); // hide camera preview
  //         scanSub.unsubscribe(); // stop scanning
  //         this.showCamera = false;
 //        });
  
  //     } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
  //     } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
  //     }
  //  })
  //  .catch((e: any) => console.log('Error is', e));
  //}

  async startScan() {
    this.showCamera = true;
    // Demande l'autorisation de la caméra
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      // Cache l'élément de l'interface utilisateur
      BarcodeScanner.hideBackground();
      document.body.style.background = "transparent";

      // Démarre le scan
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log(result.content); // Contenu du QR Code scanné
        this.textScanned = result.content;
        this.showCamera = false; // Cacher la caméra après avoir scanné un code
        BarcodeScanner.showBackground();
      }
    } else {
      console.error('Permission not granted');
      this.showCamera = false;
      
    }
  }

  stopScan() {
    this.showCamera = false;
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    
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

  goToListPrePage(){
    this.router.navigate(['/liste-pre']);
  }

}
