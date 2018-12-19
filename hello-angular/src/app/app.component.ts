import { Component, OnInit } from '@angular/core';
import Article from '../model/article';
import { BbsService } from './bbs.service';
import User from 'src/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  articles: Article[];
  selectedArticle: Article;
  users: User[];

  constructor(private bbsService: BbsService) { }

  ngOnInit(): void {
    this.articles = this.bbsService.getAllArticles();
    this.bbsService.getAllUsersFromGithub()
      .subscribe(res => { // JSON string 을 Object로 변환하여 변수에 담는다,,
        this.users = res;
      });
  }

  btnClicked() {
    alert('Bonjour,,');
  }

  titleClicked(article: Article) {
    this.selectedArticle = article;
  }
}
