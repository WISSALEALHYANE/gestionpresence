import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup

  constructor(public route: Router, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, 
    public authService: AuthenticationService,public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,
        Validators.email,
       
      ]],
      password: ['',[
        Validators.required,
]]
})

  }
  get errorControl(){
    return this.loginForm?.controls;
}

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if(this.loginForm?.valid){
     try{ 
      const user = await this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password);
       
      //vérifier le format de l'email
      if(this.loginForm.value.email.endsWith('@gmail.com')){
        this.route.navigate(['/doct']);
      }else if(this.loginForm.value.email.endsWith('@pedoc.ma')){
        this.route.navigate(['/admin']);
      }else {
        console.log('Invalid email format');
      }
      }catch ( error){ 
        console.log(error);
       
      }
      finally {
        // Dismiss loading in both success and error cases
        loading.dismiss();
      }
    } else {
      // Dismiss loading if form is not valid
      loading.dismiss();
}
      
    }

  }

