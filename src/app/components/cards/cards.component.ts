import { Component, OnInit, ViewChildren, Input, ViewChild } from '@angular/core';
import { ArticleService } from '../../services/article.service';

//classArticle
import { Article } from '../../models/article';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  @ViewChildren(ModalComponent)
  modal: ModalComponent;



  articleList: Article[];

  constructor(
    private articleService: ArticleService,
  ) { }

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

}
