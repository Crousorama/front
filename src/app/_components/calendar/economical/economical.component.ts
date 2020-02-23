import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-economical',
  templateUrl: './economical.component.html',
  styleUrls: ['./economical.component.scss']
})
export class EconomicalComponent implements OnInit {

  @Input() economicalObject: object;

  constructor() {
  }

  ngOnInit() {
  }

  getKeys(obj) {
    return Object.keys(obj);
  }

}
