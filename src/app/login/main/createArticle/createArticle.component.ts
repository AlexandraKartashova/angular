import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../../../core/service/articles.services'
import { TagService } from '../../../core/service/tags.service'
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-createArticle',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss']
})
export class CreateArticleComponent implements OnInit {

  tags:any = [];
  tagsArray:any = [];

  nameArticle = new FormControl('', [
    Validators.required
  ]);

  description = new FormControl('', [
    Validators.required
  ]);

  constructor(private articleServise: ArticleService,
    private tagService: TagService,
    public _snackBar: MatSnackBar
    ) { }
    

  ngOnInit(): void {
    this.tagService.getTag().subscribe(res => {
      res.forEach(temp => {
        if (this.tagsArray.indexOf(temp.name) < 0) this.tagsArray.push(temp.name);
      });
    });
  }
  
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
    let tagsValue = [];
    this.tags.forEach(temp => tagsValue.push(temp.value));
  
    const body = {
      nameArticles: this.nameArticle.value,
      tags: tagsValue,
      id: new Date(),
      author: this.authorName(),
      description: this.description.value,
      dataCreated: this.dateCreated()
    }
    this.articleServise.postArticles(body).subscribe(res => { 
    })
    tagsValue.filter(temp => {
      if (this.tagsArray.indexOf(temp) < 0) {
        this.tagService.postTag(temp).subscribe(res => { 
      });
    }
    })

    this.nameArticle.reset();
    this.description.reset();
    this.tags = [];
    
    this._snackBar.open('Article created','', {
      panelClass: 'article-add-page',
      duration: 2000
    })
  }
}
