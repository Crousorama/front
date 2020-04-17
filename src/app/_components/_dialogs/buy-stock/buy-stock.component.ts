import {Component, Inject, OnInit} from '@angular/core';
import {MyStocksService} from '../../../_services/my-stocks.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-buy-stock',
  templateUrl: './buy-stock.component.html',
  styleUrls: ['./buy-stock.component.scss']
})
export class BuyStockComponent implements OnInit {

  buyModel = null;

  account = 'pea';

  loading = false;

  constructor(
    private myStocksService: MyStocksService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<BuyStockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      symbol: string;
      longname: string;
    }
  ) {
  }

  ngOnInit() {
    this.buyModel = {
      symbol: this.data.symbol,
      fullName: this.data.longname,
      qty: 0,
      bought_value: 0,
    };
  }

  bought() {
    this.loading = true;
    this.myStocksService.buyStocks(this.account, this.buyModel).subscribe(() => {
      this.buyModel = {
        symbol: this.data.symbol,
        qty: 0,
        bought_value: 0,
        fullName: this.data.longname,
      };
      this.loading = false;
      this.dialogRef.close();
      this.snackBar.open('Ajouté', 'Ok');
    });
  }


}
