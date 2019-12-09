import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Article } from '../models/article';
import { AngularFirestore } from '@angular/fire/firestore';
import { Attribute } from '@angular/compiler';
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  artileList: AngularFireList<any>;
  selectArticle: Article = new Article();

  constructor(
    private firebase: AngularFireDatabase,
  ) { }

  getArticle() {
    return this.artileList = this.firebase.list('article');
  }

  insertArticle(articles: Article) {
    this.artileList.push({
      title: articles.title,
      description: articles.description,
      price: articles.price,
      imageUrl: articles.imageUrl
    }
    )
  }

  updateArticle(articles: Article) {
    this.artileList.update(articles.$key, {
      title: articles.title,
      description: articles.description,
      price: articles.price,
      imageUrl: articles.imageUrl
    })
  }

  deleteArticle($key: string) {
    this.artileList.remove($key);
  }


}


