import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-modal-window-tags',
  templateUrl: './modal-window-tags.component.html',
  styleUrls: ['./modal-window-tags.component.scss']
})

export class ModalWindowTagsComponent{
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['author', 'nameArticles', 'description'];

  constructor(
    public dialogRef: MatDialogRef<ModalWindowTagsComponent>, 
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
      this.data.dataSource.paginator = this.paginator;
      this.data.dataSource.sort = this.sort;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
