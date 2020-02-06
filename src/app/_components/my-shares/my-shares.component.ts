import {Component, OnInit} from '@angular/core';
import {MyStocksService} from '../../_services/my-stocks.service';
import {AuthService} from '../../_services/auth.service';
import {map} from 'rxjs/operators';


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

  pea = [];
  titres = [];

  constructor(
    private myStocksService: MyStocksService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.qUser.then(() => {
      this.myStocksService.listMyStocks().subscribe(stocks => {
        console.log('stocks', stocks);
        this.loading = false;
        this.pea = stocks['stocks'].pea;
        this.titres = stocks['stocks'].titres;
      });
    });
  }

}
