import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
<<<<<<< Updated upstream
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
=======
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    WelcomeComponent,
<<<<<<< Updated upstream
    TermsOfUseComponent
=======
    AfterloginComponent,
    ForgetpasswordComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
