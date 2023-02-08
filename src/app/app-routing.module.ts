import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { TokenComponent } from './token/token.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

const routes: Routes = [

 {path:'',component:LoginComponent,children:[]},
 {path:"welcome",component:WelcomeComponent},
 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"home",component:HomeComponent},
 {path:"barcode",component:BarcodeComponent},
 {path:"token",component:TokenComponent},
 {path:"termsOfUse",component:TermsOfUseComponent},
 {path:"forgetPassword",component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
