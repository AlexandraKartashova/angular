import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';

import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormsModule }   from '@angular/forms';        
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'; 


import { LoginComponent } from './login/login.component';
import { MainComponent } from './login/main/main.component';
import { AllArticlesComponent } from './login/main/allArticles/allArticles.component';
import { FavoriteArticlesComponent } from './login/main/favoriteArticles/favoriteArticles.component';
import { CreateArticleComponent } from './login/main/createArticle/createArticle.component';
import { MyArticlesComponent } from './login/main/myArticles/myArticles.component';
import { GraphsComponent } from './login/main/graphs/graphs.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { ModalWindowTagsComponent } from './login/main/allArticles/modal-window-tags/modal-window-tags.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    AllArticlesComponent,
    FavoriteArticlesComponent,
    CreateArticleComponent,
    MyArticlesComponent,
    GraphsComponent,
    ModalWindowTagsComponent
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



