import {Component, OnInit} from '@angular/core';
import {StockService} from '../../../_services/stock.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.scss']
})
export class GraphiqueComponent implements OnInit {

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute
  ) {
  }

  loading = true;
  graphicUrl: string;

  ngOnInit() {
    const stockId = this.route.snapshot.paramMap.get('stockId');
    this.stockService.getTabInfo(stockId, 'graphique').subscribe((data: { url: string }) => {
      console.log('data', data);
      this.graphicUrl = data.url;
      this.loading = false;
    });
  }

}
