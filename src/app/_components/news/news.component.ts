import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../../_services/news-api.service';
import {News} from '../../_models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private newsApiService: NewsApiService
  ) { }

  news: News[];
  loading = true;

  ngOnInit() {
    this.newsApiService.getNews().subscribe((news: News[]) => {
      this.news = news;
      this.loading = false;
    });
  }

  getDate(date) {
    return new Date(date).toLocaleDateString() + ' ' + new Date(date).toLocaleTimeString();
  }

  redirect(link) {
    window.location.href = link;
  }

}
