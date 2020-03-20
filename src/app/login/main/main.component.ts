import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  item = 0;
  
  constructor() {

  }

  getNameUser(){
    let userName = localStorage.getItem('userName');
    return userName;
  }
  

  ngOnInit(): void {
    
  }

  clickOnElement(value) {
    this.item = value;
  }
}
