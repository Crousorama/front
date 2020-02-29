import {Component, OnInit} from '@angular/core';
import {RealtimeNews} from '../../_models/realtime-news';
import {NewsApiService} from '../../_services/news-api.service';

@Component({
  selector: 'app-realtime-news',
  templateUrl: './realtime-news.component.html',
  styleUrls: ['./realtime-news.component.scss']
})
export class RealtimeNewsComponent implements OnInit {

  news: RealtimeNews[] = [];
  loading = true;

  constructor(
    private newsApiService: NewsApiService
  ) {
  }

  ngOnInit() {
    this.newsApiService.getRealtimeNews().subscribe((news: RealtimeNews[]) => {
      console.log('news', news);
      this.news = news.map(n => {
        n.date = new Date(n.date);
        return n;
      });
      this.loading = false;
    });
  }

}
