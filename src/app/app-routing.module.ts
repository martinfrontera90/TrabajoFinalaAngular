import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { ArticlesListComponent } from './components/articles/articles-list/articles-list.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent},
  { path: 'home', component: ArticleListComponent},
  { path: 'registrar', component: ArticleComponent},
  { path: 'misarticulos', component: ArticlesListComponent},
  { path: '',   redirectTo: '/cards', pathMatch: 'full' },

  
];

@NgModule({
  
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule, 
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
