import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article("Angular", "http://angular.io",11),
      new Article("Yahoo", "https://www.yahoo.com.tw", 20),
      new Article("Google", "https:/www.google.com", 50)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    this.articles.unshift(new Article(title.value,link.value,0));
    return false;
  }
}
