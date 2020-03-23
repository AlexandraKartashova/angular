import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../core/service/http.service';


@Component({
  selector: 'app-createArticle',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss']
})
export class CreateArticleComponent implements OnInit {

  constructor(private router: Router, 
    private httpService: HttpService) { }

  ngOnInit(): void {
  }

  nameArticle = new FormControl('', [
    Validators.required
  ]);

  description = new FormControl('', [
    Validators.required
  ]);


  getErrorMessageNameArticle(){
    if (this.nameArticle.hasError('required')) {
      return 'Fill in the field';
    }
  }


  getErrorMessageDescription(){
    if (this.description.hasError('required')) {
      return 'Fill in the field';
    }
  }

  addArticle(){

  }
}
