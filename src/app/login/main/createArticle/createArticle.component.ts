import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../../core/service/http.service';
import { ArticleService } from '../../../core/service/articles.services'
import { TagService } from '../../../core/service/tags.service'


@Component({
  selector: 'app-createArticle',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss']
})
export class CreateArticleComponent implements OnInit {



  constructor(private router: Router, 
    private httpService: HttpService,
    private articleServise: ArticleService,
    private tagService: TagService
    ) { }

  ngOnInit(): void {
  }

  nameArticle = new FormControl('', [
    Validators.required
  ]);

  description = new FormControl('', [
    Validators.required
  ]);

  tags:any = [];

  getErrorMessageNameArticle() {
    if (this.nameArticle.hasError('required')) {
      return 'Fill in the field';
    }
  }

  getErrorMessageDescription() {
    if (this.description.hasError('required')) {
      return 'Fill in the field';
    }
  }
  
  clearField() {
    this.nameArticle.reset();
    this.description.reset();
    this.tags = [];
  }

  authorName() {
    return localStorage.getItem('userName');
  }

  dateCreated() {
    return new Date().toLocaleDateString();
  }
  
  
  addArticle() {
    const tagsValue = [];
    this.tags.forEach(temp => tagsValue.push(temp.value));
    
    const body = {
      nameArticles: this.nameArticle.value,
      tags: tagsValue,
      author: this.authorName(),
      description: this.description.value,
      dataCreated: this.dateCreated()
    }
    this.articleServise.postArticles(body).subscribe(res => {
      console.log(res)
    })

    this.tagService.postTag(this.tags).subscribe(res => {
      res.forEach(temp => {
        if (tagsValue.indexOf(temp.name) < 0) this.tags.push(temp.name);
      });
      console.log('res', res);
      console.log('tagsValue', tagsValue);
      console.log('tags', this.tags);

    });
  }
}
