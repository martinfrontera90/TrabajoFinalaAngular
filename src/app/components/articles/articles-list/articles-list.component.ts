import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articleList: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticle()
      .snapshotChanges().subscribe(item => {
        this.articleList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.articleList.push(x as Article);
        });
      });
  }

  onEdit(articulo: Article) {
    this.articleService.selectArticle=articulo;
  }

  editar(articulo: Article) {
    this.articleService.updateArticle(articulo)
  }

  onDelete($key) {
    this.articleService.deleteArticle($key);

  }
}
