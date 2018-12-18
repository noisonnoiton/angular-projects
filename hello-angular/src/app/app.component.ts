import { Component } from '@angular/core';
import Article from '../model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles: Article[] = [
    {id: 1, title: 'first,,'},
    {id: 2, title: 'second,,'},
    {id: 3, title: 'third,,'},
    {id: 4, title: 'fourth,,'},
    {id: 5, title: 'fifth,,'},
    {id: 6, title: 'sixth,,'},
    {id: 7, title: 'seventh,,'}
  ];

  selectedArticle: Article;

  btnClicked() {
    alert('Bonjour,,');
  }

  titleClicked(article: Article) {
    this.selectedArticle = article;
  }
}
