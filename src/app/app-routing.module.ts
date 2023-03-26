import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { TokenComponent } from './token/token.component';

const routes: Routes = [

 {path:'',component:WelcomeComponent,children:[]},
 {path:"welcome",component:WelcomeComponent},
 {path:"home",component:HomeComponent},
 {path:"barcode",component:BarcodeComponent},
 {path:"token",component:TokenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
