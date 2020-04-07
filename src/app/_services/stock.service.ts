import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Palmares} from '../_models/palmares';
import {map} from 'rxjs/operators';
import {PalmaresDividend} from '../_models/palmares-dividend';

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

  getBySymbol(symbol: string, range = '5d') {
    return this.http.get(`${environment.apiUrl}/finance/indice/${symbol}?range=${range}`);
  }

  getPalmares(): Observable<Palmares[]> {
    return this.http.get(`${environment.apiUrl}/finance/palmares`).pipe(map((palmares: Palmares[]) => palmares));
  }

  getPalmaresDividend(page = 1) {
    return this.http.get(`${environment.apiUrl}/finance/palmares_dividend?page=${page}`).pipe(map((res: PalmaresDividend[]) => res));
  }
}
