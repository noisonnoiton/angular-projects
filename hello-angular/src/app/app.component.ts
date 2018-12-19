import { Component, OnInit } from '@angular/core';
import Article from '../model/article';
import { BbsService } from './bbs.service';
import User from 'src/model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  articles: Article[];
  selectedArticle: Article;
  users: Observable<User[]>;
  // users: User[];
  isError = false;

  constructor(private bbsService: BbsService) { }

  ngOnInit(): void {
    this.articles = this.bbsService.getAllArticles();
    this.users = this.bbsService.getAllUsersFromGithub();

    // this.bbsService.getAllUsersFromGithub()
      // .subscribe(res => { // JSON string 을 Object로 변환하여 변수에 담는다,,
      //   this.users = res;
      // }, error => {
      //   this.isError = true;
      //   console.log(error);
      // });
  }

  btnClicked() {
    alert('Bonjour,,');
  }

  titleClicked(article: Article) {
    this.selectedArticle = article;
  }
}
