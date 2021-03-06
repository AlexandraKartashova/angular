import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleService } from '../../../core/service/articles.services';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ModalWindowEditArticleComponent } from './modal-window-edit-article/modal-window-edit-article.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowConfirmDeleteComponent } from './modal-window-confirm-delete/modal-window-confirm-delete.component'

@Component({
  selector: 'app-myArticles',
  templateUrl: './myArticles.component.html',
  styleUrls: ['./myArticles.component.scss']
})
export class MyArticlesComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['author', 'nameArticles', 'dataCreated', 'tags','description', ' '];
  selectName: string[] = ['', 'Author', 'Name Articles', 'Description'];
  dataSource: MatTableDataSource<any>;
  allArticlesForThisAuthor: object[] = [];

  constructor(private articleService: ArticleService, public dialog: MatDialog) { 
    let author = localStorage.getItem('userName');

    this.articleService.getArticles().subscribe(res => {
      if(res.length) {
        res =  res.filter(temp => temp && (temp.author === author));
        this.allArticlesForThisAuthor = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      };
    });
  }

  ngOnInit(): void {
  }
  
  deleteArticle(article, index) {
    const id = article.id;
    this.articleService.deleteArticle(id).subscribe(res => {
    this.allArticlesForThisAuthor.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.allArticlesForThisAuthor);
    this.dataSource.paginator = this.paginator;
    })
    const dialogRef = this.dialog.open(ModalWindowConfirmDeleteComponent, {
      width: '90%',
      height: '85%',
      data: {article: article}
      });
  }

  openDialog(article, index) {
    console.log(typeof(article.tags))
    if(!Array.isArray(article.tags)) {
      article.tags = [article.tags];
    }
    const dialogRef = this.dialog.open(ModalWindowEditArticleComponent, {
      width: '90%',
      height: '85%',
      data: {article: article}
      });
  }
}