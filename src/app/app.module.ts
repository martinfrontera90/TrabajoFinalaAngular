import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';

//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'; 
import {environment} from '../environments/environment';

//components
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesListComponent } from './components/articles/articles-list/articles-list.component';
import { ArticleComponent } from './components/articles/article/article.component';

//services
import {ArticleService} from './services/article.service';
import { CardsComponent } from './components/cards/cards.component';
import { ModalComponent } from './components/cards/modal/modal.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HeadComponent } from './components/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticleComponent,
    CardsComponent,
    ModalComponent,
    ArticleListComponent,
    HeadComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    NgbModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
