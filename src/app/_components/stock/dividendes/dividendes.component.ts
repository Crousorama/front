import { Component, OnInit } from '@angular/core';
import {Cours} from '../../../_models/stock/cours';
import {ActivatedRoute} from '@angular/router';
import {StockService} from '../../../_services/stock.service';
import {Dividende} from '../../../_models/stock/dividende';

@Component({
  selector: 'app-dividendes',
  templateUrl: './dividendes.component.html',
  styleUrls: ['./dividendes.component.scss']
})
export class DividendesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }

  loading = true;
  dividendes: Dividende[] = [];
  displayedColumns: string[] = ['year', 'detachment', 'payment', 'type', 'amount'];

  ngOnInit() {
    const stockId = this.route.snapshot.paramMap.get('stockId');
    this.stockService.getTabInfo(stockId, 'dividendes').subscribe((data: Dividende[]) => {
      this.dividendes = data;
      this.loading = false;
    });
  }

}
