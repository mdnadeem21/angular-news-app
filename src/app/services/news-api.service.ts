import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private _http: HttpClient) {}

  // Top Headlines API url
  topHeadlineNews: any =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=7c63f36e81dd4f5da3f453e697298ea9';

  // Tech news API url
  techNews : any = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7c63f36e81dd4f5da3f453e697298ea9"
    
  techHeadlineNews() : Observable<any>{
    return this._http.get(this.techNews)
  }
  headlineNews() : Observable<any>{
      return this._http.get(this.topHeadlineNews)
    }

  }
