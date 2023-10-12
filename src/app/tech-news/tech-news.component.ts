import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent {

  constructor(private _newsApi : NewsApiService){}
    // Display headlines data
    techHeadlinesData : any = []
    ngOnInit(){
      this._newsApi.techHeadlineNews().subscribe(res => {
        console.log(res.articles)
        this.techHeadlinesData = res.articles
      })
    }
}
