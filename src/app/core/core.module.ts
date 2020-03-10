import { NgModule } from '@angular/core';
import { HttpService }   from './service/http.service';
import { ArticleService } from './service/articles.services';

const serviceArray: any = [HttpService, ArticleService]; 


@NgModule({
    declarations: [],
    imports: [],
    providers: [...serviceArray],
    bootstrap: []
})
export class CoreModule { }