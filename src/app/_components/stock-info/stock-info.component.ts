import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StockInfo} from '../../_models/StockInfo';
import {DataUpdatedService} from '../../_services/data-updated.service';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit {

  constructor(
    private dataUpdatedService: DataUpdatedService
  ) {
  }

  @Input() stockInfo: StockInfo;
  @Output() intervalEmitter = new EventEmitter();
  chartData = [];
  columnNames = ['Date', 'Prix'];
  options = {
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Prix'
    },
  };

  ngOnInit() {
    console.log('stockinfo', this.stockInfo);
    this.createChartData();
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
    console.log('data updated in chart');
  }

}
