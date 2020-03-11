import { NgModule } from '@angular/core';
import { HttpService }   from './service/http.service';
import { ArticleService } from './service/articles.services';
import { TagService } from './service/tags.service';

const serviceArray: any = [ HttpService, 
    ArticleService, 
    TagService]; 


@NgModule({
    declarations: [],
    imports: [],
    providers: [...serviceArray],
    bootstrap: []
})
export class CoreModule { }