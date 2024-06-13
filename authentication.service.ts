import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth,public router:Router,public afAuth: AngularFireAuth) { }

  async registerUser(email:string,password:string){
    return await this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }

  async loginUser(email:string,password:string):Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }
  async createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
}
async logoutUser(): Promise<void> {
  return this.afAuth.signOut();
}

  async resetPassword(email:string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async signOut(){
    return await this.ngFireAuth.signOut()
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser
  }
}
