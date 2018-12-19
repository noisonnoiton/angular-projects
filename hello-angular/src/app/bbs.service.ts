import { Injectable } from '@angular/core';
import Article from '../model/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BbsService {

  constructor(private http: HttpClient) {}

  // 서비스에는 Observable을 return,,
  getAllUsersFromGithub(): Observable<any> {
    return this.http.get('http://localhost:3000/data');
      // .subscribe(function (response) {
      // .subscribe(response => {
      //   console.log(response);
      // });

  }

  // 게시물 전체보기
  getAllArticles(): Article[] {
    return [
      {id: 1, title: 'first,,'},
      {id: 2, title: 'second,,'},
      {id: 3, title: 'third,,'},
      {id: 4, title: 'fourth,,'},
      {id: 5, title: 'fifth,,'},
      {id: 6, title: 'sixth,,'},
      {id: 7, title: 'seventh,,'}
    ];
  }

  // 게시물 상세보기
  // getArticleById(id: number): Article {
  //   //TODO
  // }
}
