import { Component, OnInit } from '@angular/core';
import {StockService} from '../../_services/stock.service';
import {Palmares} from '../../_models/palmares';

@Component({
  selector: 'app-palmares',
  templateUrl: './palmares.component.html',
  styleUrls: ['./palmares.component.scss']
})
export class PalmaresComponent implements OnInit {

  palmares: Palmares[] = [];
  loading = true;

  constructor(
    private stockService: StockService
  ) { }

  async ngOnInit() {
    this.palmares = await this.stockService.getPalmares().toPromise();
    this.loading = false;
  }

  isRaising(palmares: Palmares) {
    return palmares.variation.includes('+');
  }

}
