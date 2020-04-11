import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(
    private http: HttpClient
  ) { }

  getNews(page = 1) {
    return this.http.get(`${environment.apiUrl}/news?page=${page}`);
  }

  getRealtimeNews() {
    return this.http.get(`${environment.apiUrl}/news/realtime`);
  }
}
