import { Component } from '@angular/core';
import { ColDef, FirstDataRenderedEvent, GridApi, GridOptions, GridReadyEvent} from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-all-time-history',
  templateUrl: './all-time-history.component.html',
  styleUrls: ['./all-time-history.component.scss'],
  standalone: true,
  imports: [AgGridAngular]
})
export class AllTimeHistoryComponent {
  private gridApi!: GridApi;
  public columnDefs: ColDef[] = [
    { field: 'date', rowGroup: true, hide: true , flex: 1, suppressHeaderMenuButton: true },
    { field: 'price', flex: 1, suppressHeaderMenuButton: true },
    { field: 'purchase', flex: 1, suppressHeaderMenuButton: true }
  ];

  public rowData: any[] = [
    { date: '2021-01-01', price:'1', purchase: 'Item A' },
    { date: '2021-01-01', price:'1', purchase: 'Item B' },
    { date: '2021-01-02', price:'1',purchase: 'Item C' }
  ];

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    groupDefaultExpanded: -1, // expand all groups by default
    animateRows: true,
    domLayout: 'autoHeight',
    suppressMovableColumns: true,
    autoGroupColumnDef: {
      suppressHeaderMenuButton: true,
    },
    onGridReady: (params: GridReadyEvent) => {
      params.api.sizeColumnsToFit();
    },
    onFirstDataRendered: (params: FirstDataRenderedEvent) => {
      params.api.sizeColumnsToFit();
    }
    }
  };


