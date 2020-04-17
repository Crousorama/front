import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Cours} from '../../_models/stock/cours';
import {MatDialog} from '@angular/material';
import {BuyStockComponent} from '../_dialogs/buy-stock/buy-stock.component';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  name = '';
  price = '';
  variation = null;
  selectedIndex = 0;
  id = '';

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.name = params['label'];
        this.price = params['price'];
      });
  }

  isToBeDisplayed(targetIndex) {
    return this.selectedIndex === targetIndex;
  }

  stockLoaded(stockCours: Cours) {
    this.variation = stockCours.variation;
    this.id = stockCours.id;
  }

  openBuyDialog() {
    this.dialog.open(BuyStockComponent, {
      width: '75vw',
      height: '45vh',
      data: {
        symbol: this.id,
        longname: this.name
      }
    });
  }

}
