import { Injectable } from '@angular/core';
import Article from '../model/article';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from 'src/model/user';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BbsService {

  constructor(private http: HttpClient) {}

  // 서비스에는 Observable을 return,,
  getAllUsersFromGithub(): Observable<User[]> {
    const params = new HttpParams()
      .set('id', '1')
      .set('completed', 'false');
    // return this.http.get<User[]>('http://localhost:3000/data', {params});
    return this.http.get<User[]>('http://localhost:3000/data')
      .pipe(
        tap(res => {
          console.log(res);
        }, error => {
          alert('error');
        })
      );
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
