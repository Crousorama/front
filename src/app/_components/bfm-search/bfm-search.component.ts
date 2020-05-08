import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SearchService} from '../../_services/search.service';
import {SearchResult} from '../../_models/search-result';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bfm-search',
  templateUrl: './bfm-search.component.html',
  styleUrls: ['./bfm-search.component.scss']
})
export class BfmSearchComponent implements OnInit {

  searchOptions: SearchResult[] = [];
  loading = false;
  sub = null;

  static getStockId(stockUrl: string) {
    return stockUrl.split('www.tradingsat.com/')[1].replace('/', '');
  }

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {
  }


  ngOnInit() {
  }

  async change(search: string) {
    this.loading = true;
    if (this.sub) {
      await this.sub.unsubscribe();
    }
    this.sub = this.searchService.search(search).subscribe(res => this.searchOptions = res);
    this.loading = false;
  }

  chooseInfo(res: SearchResult) {
    return this.router.navigate([`/stock/${BfmSearchComponent.getStockId(res.link)}`],
      {
        queryParams: {
          label: res.label,
          price: res.price
        }
      }
    );
  }

}
