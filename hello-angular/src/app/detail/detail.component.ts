import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import Article from 'src/model/article';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input()
  detail: Article;

  // 서비스 초기화,,
  // 서버에 접속하는 서비스를 사용,,,
  constructor() {
    console.log('DetailComponent 생성자 실행,,');
  }

  // 데이터 가져와서 준비,, 데이터 초기화,,
  ngOnInit() {
    console.log('DetailComponent OnInit 생성자 실행,,');
  }

  // 데이터 가져와서 준비,, 데이터 초기화,,
  ngOnChanges(changes: SimpleChanges): void {
    console.log('DetailComponent OnChanges 생성자 실행,,', JSON.stringify(changes));
  }

}
