import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element1',
  templateUrl: './element1.component.html',
  styleUrls: ['./element1.component.scss']
  
})
export class Element1Component implements OnInit {

  seeAll = true;
  constructor() { }

  ngOnInit(): void {
  }

}
