import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  // user: User;

  constructor(private http: HttpClient) {

  }
  // ngOnInit(){
  //   HttpService.prototype.getData()
  // }
  
}
