import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DoctorantService {

  private collectionName = 'docts';

  constructor(private firestore: AngularFirestore) { }

  getDoctorantById(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }

  updateDoctorant(id: string, data: any) {
    return this.firestore.collection(this.collectionName).doc(id).update(data);
  }

}
