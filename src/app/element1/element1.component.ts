import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from '../core/service/articles.services'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TooltipComponent } from '@angular/material/tooltip';


@Component({
  selector: 'app-element1',
  templateUrl: './element1.component.html',
  styleUrls: ['./element1.component.scss']
  
})

export class Element1Component implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  seeAll = true;

  displayedColumns: string[] = ['author', 'nameArticles', 'dataCreated', 'tags', 'description'];
  dataSource: MatTableDataSource<any>;

  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe(res => {
      res = res.filter(temp => temp);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      // console.log(MatTableDataSource.arguments);
    });
  }

  getTags(){
    
  }

  ngOnInit(): void {
  }



}
