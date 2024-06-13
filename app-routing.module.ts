import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'doct',
    loadChildren: () => import('./doct/doct.module').then( m => m.DoctPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'credit',
    loadChildren: () => import('./credit/credit.module').then( m => m.CreditPageModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('./reclamation/reclamation.module').then( m => m.ReclamationPageModule)
  },
  {
    path: 'text',
    loadChildren: () => import('./text/text.module').then( m => m.TextPageModule)
  },
  {
    path: 'ajouter',
    loadChildren: () => import('./ajouter/ajouter.module').then( m => m.AjouterPageModule)
  },
  {
    path: 'liste-pre',
    loadChildren: () => import('./liste-pre/liste-pre.module').then( m => m.ListePrePageModule)
  },
  {
    path: 'passer',
    loadChildren: () => import('./passer/passer.module').then( m => m.PasserPageModule)
  },
  {
    path: 'presence',
    loadChildren: () => import('./presence/presence.module').then( m => m.PresencePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'profil-admin',
    loadChildren: () => import('./profil-admin/profil-admin.module').then( m => m.ProfilAdminPageModule)
  },
  {
    path: 'venir',
    loadChildren: () => import('./venir/venir.module').then( m => m.VenirPageModule)
  },
  {
    path: 'claim-doct',
    loadChildren: () => import('./claim-doct/claim-doct.module').then( m => m.ClaimDoctPageModule)
  },
  {
    path: 'claim-admin',
    loadChildren: () => import('./claim-admin/claim-admin.module').then( m => m.ClaimAdminPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'add-doct',
    loadChildren: () => import('./add-doct/add-doct.module').then( m => m.AddDoctPageModule)
  },
  {
    path: 'modifier/:doctId',
    loadChildren: () => import('./modifier/modifier.module').then( m => m.ModifierPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
