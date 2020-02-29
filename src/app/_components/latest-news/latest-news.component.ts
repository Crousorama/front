import { Component, OnInit } from '@angular/core';
import {News} from '../../_models/news';
import {NewsApiService} from '../../_services/news-api.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

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

  redirect(link) {
    window.location.href = link;
  }

}
