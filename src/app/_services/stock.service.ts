import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private http: HttpClient
  ) { }

  getSearchResult(query: string) {
    return this.http.get(`${environment.apiUrl}/finance/search?q=${query}`);
  }

  getBySymbol(symbol: string, range = '1d') {
    return this.http.get(`${environment.apiUrl}/finance/indice/${symbol}?range=${range}`);
  }
}
