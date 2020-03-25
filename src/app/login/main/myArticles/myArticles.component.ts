import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleService } from '../../../core/service/articles.services';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-myArticles',
  templateUrl: './myArticles.component.html',
  styleUrls: ['./myArticles.component.scss']
})
export class MyArticlesComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['author', 'nameArticles', 'dataCreated', 'tags', 'description'];
  selectName: string[] = ['', 'Author', 'Name Articles', 'Description'];
  dataSource: MatTableDataSource<any>;
  

  constructor(private articleService: ArticleService) { 
    let author = localStorage.getItem('userName');

    this.articleService.getArticles().subscribe(res => {
      if(res.length) {
        res =  res.filter(temp => temp && (temp.author === author));
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      };
    });
  }

  ngOnInit(): void {
  }
}