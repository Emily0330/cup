import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PopupResetpwdComponent } from './popup-resetpwd/popup-resetpwd.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    WelcomeComponent,
    TermsOfUseComponent,
    ForgetPasswordComponent,
    TermsOfUseComponent,
    PopupResetpwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-aumtwi80ugub50gt.us.auth0.com',
      clientId: 'Xk408iT54mPw89GIYWI1v5UW40FYgAL1',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
