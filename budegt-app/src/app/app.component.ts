
import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CurrencyPipe]
})
export class AppComponent {
  constructor(private currencyPipe: CurrencyPipe) {}
  inputValue:number = 0;
  budget = this.currencyPipe.transform(this.inputValue, 'USD', 'symbol', '1.2-2');
  title = 'budget-app';

  setBudget(){

    this.budget = this.currencyPipe.transform(this.inputValue, 'USD', 'symbol', '1.2-2');
    let cleanString  = this.budget ? this.budget.replace(/[^0-9.-]+/g, '') : '';
    let floatNumber = parseFloat(cleanString);
    let parsedNumber = Math.round(isNaN(floatNumber) ? 0 : floatNumber);
    if(parsedNumber < 0){
      this.budget = this.currencyPipe.transform(0, 'USD', 'symbol', '1.2-2');
    }

}
}

