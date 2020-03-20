import { NgModule } from '@angular/core';
import { HttpService }   from './service/http.service';
import { ArticleService } from './service/articles.services';
import { TagService } from './service/tags.service';
import { JWTService } from './service/jwt.services';
import { AuthService } from './service/auth.service';

const serviceArray: any = [ HttpService, 
    ArticleService, 
    TagService,
    JWTService,
    AuthService]; 


@NgModule({
    declarations: [],
    imports: [],
    providers: [...serviceArray],
    bootstrap: []
})
export class CoreModule { }