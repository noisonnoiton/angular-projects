import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  testName = '';
  freeCardList: string[] = [
    '2222 users included!!!!!',
    '1111 GB of storage',
    'Help center access',
    'Priority email support'
  ];

  constructor() { }

  ngOnInit() {
  }

  freeBtnClicked() {
    alert('For Free,,,');
  }

}
