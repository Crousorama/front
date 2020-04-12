import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Cours} from '../../_models/stock/cours';


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
    private route: ActivatedRoute
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

}
