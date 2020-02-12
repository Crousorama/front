import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StockInfo} from '../../_models/StockInfo';
import {DataUpdatedService} from '../../_services/data-updated.service';
import {MyStocksService} from '../../_services/my-stocks.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit {

  constructor(
    private dataUpdatedService: DataUpdatedService,
    private myStocksService: MyStocksService,
    private snackBar: MatSnackBar
  ) {
  }

  @Input() stockInfo: StockInfo;
  @Output() intervalEmitter = new EventEmitter();
  chartData = [];
  resultsData = [];
  loading = false;

  buyModel = null;
  currentRevenueFilter = 'quarterly';
  account = 'pea';

  ngOnInit() {
    console.log(this.stockInfo);
    this.buyModel = {
      symbol: this.stockInfo.meta.symbol,
      fullName: this.stockInfo.meta.longname,
      qty: 0,
      bought_value: 0,
    };
    this.createChartData();
    this.createResultsCharts();
    this.dataUpdatedService.dataUpdatedBS.subscribe((value) => {
      if (value) {
        this.createChartData();
      }
    });
  }

  changeRange(range) {
    this.intervalEmitter.emit(range);
  }

  createChartData() {
    const tmp = [];
    this.chartData = [];
    this.stockInfo.indicators.quote[0].close.map((q, idx) => {
      return tmp.push([
        new Date(this.stockInfo.timestamp[idx] * 1000).toLocaleDateString(),
        q
      ]);
    });
    this.chartData = tmp;
  }

  createResultsCharts() {
    const tmp = [
    ];
    this.stockInfo.financialsChart[this.currentRevenueFilter].forEach((data) => {
      tmp.push([data.date, data.earnings.raw, data.revenue.raw]);
    });
    this.resultsData = [...tmp];
  }

  bought() {
    this.loading = true;
    this.myStocksService.buyStocks(this.account, this.buyModel).subscribe(() => {
      this.buyModel = {
        symbol: this.stockInfo.meta.symbol,
        qty: 0,
        bought_value: 0,
        fullName: this.stockInfo.meta.longname,
      };
      this.loading = false;
      this.snackBar.open('Ajouté', 'Ok');
    });
  }

}
