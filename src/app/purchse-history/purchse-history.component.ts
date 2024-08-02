import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { GridApi, ColDef, GridOptions, GridReadyEvent, FirstDataRenderedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-purchse-history',
  templateUrl: './purchse-history.component.html',
  styleUrls: ['./purchse-history.component.scss'],
  providers: [CurrencyPipe]
})
export class PurchseHistoryComponent {
  public columnDefs: ColDef[] = [
    { field: 'date', flex: 1, suppressHeaderMenuButton: true },
    { field: 'price', flex: 1, suppressHeaderMenuButton: true },
    { field: 'purchase', flex: 1, suppressHeaderMenuButton: true }
  ];
  public name:string = '';
  public price: GLfloat = 0.00;

  public rowData: any[] = [];
  private gridApi!:GridApi;
  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    animateRows: true,
    domLayout: 'autoHeight',
    suppressMovableColumns: true,
    resetRowDataOnUpdate: true,
    onGridReady: (params: GridReadyEvent) => {
      params.api.sizeColumnsToFit();
      this.gridApi = params.api;
    },
    onFirstDataRendered: (params: FirstDataRenderedEvent) => {
      params.api.sizeColumnsToFit();
    }
    }
    constructor(private currencyPipe: CurrencyPipe) {}

  addPurchase(){
    this.rowData.push({date: Date.now(), price: this.currencyPipe.transform(this.price, 'USD', 'symbol', '1.2-2') , purchase: this.name});
    this.gridApi.applyTransaction({ add: this.rowData });
  };
}
