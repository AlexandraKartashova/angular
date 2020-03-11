import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ArticleService } from '../core/service/articles.services';
import { TagService } from '../core/service/tags.service';

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
  tagsArray: any = [];

  constructor(private articleService: ArticleService, private tagService: TagService) { 
    this.articleService.getArticles().subscribe(res => {
      res = res.filter(temp => temp);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.tagService.getTag().subscribe(res => {
      res.forEach(temp => {
        if (this.tagsArray.indexOf(temp.name) < 0) this.tagsArray.push(temp.name);
      });
    });
  }

  getInput(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
