import {Component, OnInit} from '@angular/core';
import {StockService} from '../../_services/stock.service';
import {StockInfo} from '../../_models/StockInfo';
import {DataUpdatedService} from '../../_services/data-updated.service';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';

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
    private dataUpdatedService: DataUpdatedService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      const query = queryParams.get('query');
      if (query) {
        this.getBySymbol(query);
      }
      console.log(queryParams.get('query'));
    });
  }

  onChange(event) {
    this.stockService.getSearchResult(event.target.value).subscribe((value: Array<object>) => {
      this.filteredOptions = value;
    });
  }

  onClickAutoComplete(value) {
    const queryParams: Params = {query: value.symbol};
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams,
      });
    this.getBySymbol(value.symbol);
  }

  getBySymbol(symbol) {
    this.loading = true;
    this.stockService.getBySymbol(symbol).subscribe((stock: StockInfo) => {
      this.loading = false;
      stock.meta.longname = '';
      this.currentStock = stock;
    });
  }

  onChangeRange(range) {
    this.stockService.getBySymbol(this.currentStock.meta.symbol, range).subscribe((stock: StockInfo) => {
      this.currentStock = stock;
      setTimeout(() => {
        this.dataUpdatedService.dataUpdatedBS.next(true);
      });
    });
  }

}
