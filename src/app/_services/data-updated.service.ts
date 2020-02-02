import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataUpdatedService {

  dataUpdatedBS = new BehaviorSubject(null);

  constructor() { }
}
