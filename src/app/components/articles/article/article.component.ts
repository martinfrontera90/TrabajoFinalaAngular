import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../../../services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  selectedFile: File = null;
  article = {} as Article;

  constructor(public articleService: ArticleService, private http: HttpClient) { }

  ngOnInit() {
    this.articleService.getArticle();
    this.resetForm()
  }

  resetForm(articleForm?: NgForm) {
    if (articleForm != null)
      articleForm.reset();
      this.articleService.selectArticle=new Article();
  }

  addArticle(articleForm: NgForm) {
    if (articleForm.value.$key==null){
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      this.http.post("http://localhost:8080/img", fd)
        .subscribe(res =>
          console.log(res));
      this.articleService.insertArticle(articleForm.value);
    }
    else{
      this.articleService.updateArticle(articleForm.value);
    }
    this.resetForm(articleForm);
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];

  }
}
