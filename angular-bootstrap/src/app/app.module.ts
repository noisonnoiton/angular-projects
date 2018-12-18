import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModule 임포트

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    [BrowserModule, FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
