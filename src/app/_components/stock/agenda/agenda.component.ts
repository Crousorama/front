import {Component, OnInit} from '@angular/core';
import {Cours} from '../../../_models/stock/cours';
import {ActivatedRoute} from '@angular/router';
import {StockService} from '../../../_services/stock.service';
import {Agenda} from '../../../_models/stock/agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) {
  }

  loading = true;
  agenda: Agenda = null;

  ngOnInit() {
    const stockId = this.route.snapshot.paramMap.get('stockId');
    this.stockService.getTabInfo(stockId, 'agenda').subscribe((data: Agenda) => {
      this.agenda = data;
      this.loading = false;
    });
  }

}
