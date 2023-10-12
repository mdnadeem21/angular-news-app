import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { HttpClientModule} from '@angular/common/http'
import { NewsApiService } from './services/news-api.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopHeadlineComponent,
    TechNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
    
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
