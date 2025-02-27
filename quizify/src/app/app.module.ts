import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';  
import { environment } from '../environments/environment'; 

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgModel, ReactiveFormsModule } from '@angular/forms';  // Pour utiliser Reactive Forms
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes), 
    FormsModule,
    NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}




