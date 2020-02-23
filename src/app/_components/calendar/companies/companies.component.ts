import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  @Input() eventsArray: Array<{
    name: string;
    event: string;
  }>;
  constructor() { }

  ngOnInit() {
  }

}
