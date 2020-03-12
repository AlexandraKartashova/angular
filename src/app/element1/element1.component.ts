import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ArticleService } from '../core/service/articles.services';
import { TagService } from '../core/service/tags.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowTagsComponent } from '../modal-window-tags/modal-window-tags.component';
import { element } from 'protractor';
import { filter } from 'rxjs/internal/operators';

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
  selectName: string[] = ['', 'Author', 'Name Articles', 'Tags', 'Description'];
  dataSource: MatTableDataSource<any>;
  tagsArray: any = [];
  allInfoArticles: any;
  valueSelect: string;

  constructor(private articleService: ArticleService, private tagService: TagService, public dialog: MatDialog) { 
    this.articleService.getArticles().subscribe(res => {
      res = res.filter(temp => temp);
      this.allInfoArticles = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
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
      // if (filterValue != '') {
      //   if(this.valueSelect === 'Author') {
          
      //   }

      // } else 
      
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(value) {
    const array = this.allInfoArticles.filter(res => res.tags === value);
    const dialogRef = this.dialog.open(ModalWindowTagsComponent, {
    width: '90%',
    height: '85%',
    data: {dataSource: array, tag: value}
  });
  }
}
