import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';


import { MatInputModule } from '@angular/material/input'; //input
import { MatFormFieldModule } from '@angular/material/form-field'; // form
import { FormsModule }   from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; //icon
import { MatCardModule } from '@angular/material/card'; //  card
import { MatButtonModule } from '@angular/material/button';//button


import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    LoginRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



