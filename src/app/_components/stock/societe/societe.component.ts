import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StockService} from '../../../_services/stock.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) {
  }

  companyData: {
    description: string
  };
  loading = true;

  ngOnInit() {
    const stockId = this.route.snapshot.paramMap.get('stockId');
    this.stockService.getTabInfo(stockId, 'societe').subscribe((data: { description: string }) => {
      this.companyData = data;
      this.loading = false;
    });
  }

}
