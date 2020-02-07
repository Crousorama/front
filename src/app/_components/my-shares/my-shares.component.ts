import {Component, OnInit} from '@angular/core';
import {MyStocksService} from '../../_services/my-stocks.service';
import {AuthService} from '../../_services/auth.service';
import {map} from 'rxjs/operators';
import {UserStock} from '../../_models/user-stock';
import {StockService} from '../../_services/stock.service';
import {Stock} from '../../_models/stock';
import {MatDialog} from '@angular/material';
import {ConfirmComponent} from './confirm/confirm.component';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-my-shares',
  templateUrl: './my-shares.component.html',
  styleUrls: ['./my-shares.component.scss']
})
export class MySharesComponent implements OnInit {

  loading = true;

  pea: UserStock[] = [];
  titres: UserStock[] = [];

  constructor(
    private myStocksService: MyStocksService,
    private authService: AuthService,
    private stockService: StockService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.authService.qUser.then(() => {
      this.myStocksService.listMyStocks().subscribe(async (stocks) => {
        this.loading = false;
        this.pea = await this.initVariation(stocks['stocks'].pea);
        this.titres = await this.initVariation(stocks['stocks'].titres);
      });
    });
  }

  initVariation(stocks: UserStock[]) {
    const tabPromise = [];
    stocks.forEach((stock: UserStock) => {
      tabPromise.push(new Promise(resolve => {
        this.stockService.getBySymbol(stock.symbol).subscribe((value: Stock) => {
          console.log('value', value);
          let variation = value.meta.regularMarketPrice / stock.bought_value;
          variation = variation > 1 ? (variation - 1) * 100 : (1 - variation) * -100;
          stock.variation = variation;
          stock.currentValue = value.meta.regularMarketPrice;
          resolve(stock);
        });
      }));
    });
    return Promise.all(tabPromise);
  }

  deleteStock(account, stock, idx) {
    this.dialog.open(ConfirmComponent, {
      width: '250px',
      height: '300px'
    }).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        console.log('deleting');
        this.myStocksService.deleteStocks(account, stock.symbol).subscribe(() => {
          if (account === 'pea') {
            this.pea.splice(idx, 1);
          } else {
            this.titres.splice(idx, 1);
          }
        });
      }
    });
  }

}
