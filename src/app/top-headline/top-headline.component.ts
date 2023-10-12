import { Component , OnInit} from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent {

    constructor(private _newsApi : NewsApiService){}
    // Display headlines data
    topHeadlinesData : any = []
    ngOnInit(){
      this._newsApi.headlineNews().subscribe(res => {
        console.log(res.articles)
        this.topHeadlinesData = res.articles
      })
    }
}
