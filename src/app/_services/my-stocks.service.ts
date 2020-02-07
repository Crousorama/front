import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyStocksService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  listMyStocks() {
    return this.http.get(`${environment.apiUrl}/stock_users/${this.authService.user.email}`);
  }

  buyStocks(account, stock) {
    return this.http.post(`${environment.apiUrl}/stock_users/${account}/${this.authService.user.email}`, stock);
  }

  deleteStocks(account, symbol) {
    return this.http.delete(`${environment.apiUrl}/stock_users/${account}/${this.authService.user.email}/${symbol}`);
  }
}
