import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from '../../../../core/service/articles.services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-window-edit-article',
  templateUrl: './modal-window-edit-article.component.html',
  styleUrls: ['./modal-window-edit-article.component.scss']
})
export class ModalWindowEditArticleComponent implements OnInit {

  tags:any = [];
  author: string;

  constructor(public dialogRef: MatDialogRef<ModalWindowEditArticleComponent>,
    public articleService: ArticleService,
    public _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.data.editArticle = this.author; // dr datasource will be
    }

  ngOnInit(): void {
  }

  dateCreated() {
    return new Date().toLocaleDateString();
  }

  editArticle(){
    this.articleService.putArticle(this.data.article.id, this.data.article).subscribe(res => { 
    })
    this._snackBar.open('Article modified','', {
      panelClass: 'article-add-page',
      duration: 2000
    })
    this.dialogRef.close();
  }

  backPage(){
    this.dialogRef.close();
  }
}
