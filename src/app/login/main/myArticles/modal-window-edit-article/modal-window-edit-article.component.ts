import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from '../../../../core/service/articles.services'

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
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.data.dataSource = this.author;
      console.log(data.dataSource)
      console.log(data.dataSource)
    }

  ngOnInit(): void {
  }

  dateCreated() {
    return new Date().toLocaleDateString();
  }

  editArticle(){
    const body = {
      // nameArticles: this.nameArticle.value,
      // tags: tagsValue,
      id: new Date(),
      // author: this.authorName(),
      // description: this.description.value,
      dataCreated: this.dateCreated()
    }
    this.articleService.putArticle(body).subscribe(res => { 
    })
    
  }

  onKey(event) {
    const inputValue = event.target.value;
    console.log(event.target.value)
  }

  backPage(){
    this.dialogRef.close();
  }
}
