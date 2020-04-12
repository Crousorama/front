import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchResult} from '../_models/search-result';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(q: string): Observable<SearchResult[]> {
    return this.http.get(`${environment.apiUrl}/finance/search?q=${q}`)
      .pipe(map((res: SearchResult[]) => res));
  }
}
