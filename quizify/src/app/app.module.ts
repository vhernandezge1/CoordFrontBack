import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';  
import { environment } from '../environments/environment'; 

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { ReactiveFormsModule } from '@angular/forms';  // Pour utiliser Reactive Forms
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
