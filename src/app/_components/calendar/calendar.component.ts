import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarService} from '../../_services/calendar.service';
import {MatTabGroup} from '@angular/material';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild('tabGroup', {static: false}) tabGroup: MatTabGroup;

  daysKeys = [];
  months = {
    janvier: '01',
    février: '02',
    mars: '03',
    avril: '04',
    mai: '05',
    juin: '06',
    juillet: '07',
    août: '08',
    septembre: '09',
    octobre: '10',
    novembre: '11',
    décembre: '12',
  };
  calendar = {};

  constructor(
    private calendarService: CalendarService
  ) {
  }

  ngOnInit() {
    this.calendarService.getCalendar().subscribe(calendar => {
      console.log('calendar', calendar);
      this.calendar = calendar;
      this.daysKeys = Object.keys(calendar).map(key => this.stringToDate(key)).sort((a, b) => {
        return Date.parse(a.processed) - Date.parse(b.processed);
      });
    });
  }

  stringToDate(str: string) {
    const split = str.split(' ');
    return {
      processed: `${this.months[split[split.length - 2]]}/${split[split.length - 3]}//${split[split.length - 1]}`,
      original: str,
    };
  }

  getKeys(obj: object) {
    return Object.keys(obj);
  }

  isInstanceOfArray(obj) {
    return obj instanceof Array;
  }

  next() {
    this.tabGroup.selectedIndex += 1;
  }

  previous() {
    this.tabGroup.selectedIndex -= 1;
  }

}
