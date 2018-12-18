import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  companyName = 'KITRI(한국정보기술연구원)';
  targetImage = 'https://estudy.kitri.re.kr/upload/homepage/logo/32/main_toplogo@navy.png';
  targetWidth = 100;
  isShow = true;

  constructor() { }

  ngOnInit() {
  }

  hideSignBtn() {
    this.isShow = false;
  }

  showSignBtn() {
    this.isShow = true;
  }

}
