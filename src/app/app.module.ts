import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';//http client

import { MatInputModule } from '@angular/material/input'; //input
import { MatFormFieldModule } from '@angular/material/form-field'; // form
import { FormsModule }   from '@angular/forms';         //forms
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; //icon
import { MatCardModule } from '@angular/material/card'; //  card
import { MatButtonModule } from '@angular/material/button';//button
import { MatSidenavModule } from '@angular/material/sidenav'; //sidenav
import { MatToolbarModule } from '@angular/material/toolbar';//toolbar
import { MatListModule } from '@angular/material/list'; //list


import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { Element1Component } from './element1/element1.component';
import { Element2Component } from './element2/element2.component';
import { Element3Component } from './element3/element3.component';
import { Element4Component } from './element4/element4.component';
import { Element5Component } from './element5/element5.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    Element1Component,
    Element2Component,
    Element3Component,
    Element4Component,
    Element5Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    CoreModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



