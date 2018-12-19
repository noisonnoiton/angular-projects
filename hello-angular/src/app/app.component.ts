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
      .subscribe(res => {
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
