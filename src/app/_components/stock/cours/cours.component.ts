import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StockService} from '../../../_services/stock.service';
import {Cours} from '../../../_models/stock/cours';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }

  @Output() stockCoursLoadedEvent = new EventEmitter();

  loading = true;
  stockCours: Cours;

  ngOnInit() {
    const stockId = this.route.snapshot.paramMap.get('stockId');
    this.stockService.getTabInfo(stockId, 'cours').subscribe((data: Cours) => {
      this.stockCours = data;
      this.loading = false;
      this.stockCoursLoadedEvent.emit(data);
    });
  }

}
