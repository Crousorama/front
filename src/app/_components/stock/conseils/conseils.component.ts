import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StockService} from '../../../_services/stock.service';
import {Conseil} from '../../../_models/stock/conseil';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.scss']
})
export class ConseilsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }
  stockId: string;
  page = 1;
  loading = false;
  conseils: Conseil[] = [];

  ngOnInit() {
    this.stockId = this.route.snapshot.paramMap.get('stockId');
    this.loadConseils();
  }

  loadConseils() {
    this.loading = true;
    this.stockService.getTabInfo(this.stockId, 'conseils', this.page).subscribe((data: Conseil[]) => {
      this.conseils = data;
      this.loading = false;
    });
  }

  changePage(event: PageEvent) {
    this.page = event.pageIndex;
    this.loadConseils();
  }
}
