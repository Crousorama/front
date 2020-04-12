import { Component, OnInit } from '@angular/core';
import {Cours} from '../../../_models/stock/cours';
import {ActivatedRoute} from '@angular/router';
import {StockService} from '../../../_services/stock.service';
import {News} from '../../../_models/stock/news';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }

  loading = true;
  news: News[] = [];
  page = 1;
  stockId = '';

  ngOnInit() {
    this.stockId = this.route.snapshot.paramMap.get('stockId');
    this.loadNews();
  }

  loadNews() {
    this.loading = true;
    this.stockService.getTabInfo(this.stockId, 'actualites', this.page).subscribe((data: News[]) => {
      this.news = data;
      this.loading = false;
    });
  }

  changePage(page: PageEvent) {
    this.page = page.pageIndex;
    this.loadNews();
  }

}
