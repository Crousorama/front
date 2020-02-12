import { Component, OnInit } from '@angular/core';
import {StockService} from '../../_services/stock.service';
import {StockInfo} from '../../_models/StockInfo';
import {DataUpdatedService} from '../../_services/data-updated.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput = '';
  currentStock: StockInfo = null;
  filteredOptions = [];
  loading = false;

  constructor(
    private stockService: StockService,
    private dataUpdatedService: DataUpdatedService
  ) { }

  ngOnInit() {
  }

  onChange(event) {
    this.stockService.getSearchResult(event.target.value).subscribe((value: Array<object>) => {
      this.filteredOptions = value;
    });
  }

  onClickAutoComplete(value) {
    this.loading = true;
    this.stockService.getBySymbol(value.symbol).subscribe((stock: StockInfo) => {
      this.loading = false;
      stock.meta.longname = value.longname;
      this.currentStock = stock;
    });
  }

  onChangeRange(range) {
    this.stockService.getBySymbol(this.currentStock.meta.symbol, range).subscribe((stock: StockInfo) => {
      this.currentStock = stock;
      setTimeout(() => {
        this.dataUpdatedService.dataUpdatedBS.next(true);
        console.log('updated in search');
      });
    });
  }

}
