import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PurchseHistoryComponent } from './purchse-history/purchse-history.component';
import { AllTimeHistoryComponent } from './all-time-history/all-time-history.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    PurchseHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AllTimeHistoryComponent,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
