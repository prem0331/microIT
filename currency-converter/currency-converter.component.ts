import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'INR';
  currencies: string[] = ['USD', 'INR', 'EUR', 'GBP', 'JPY', 'AUD'];
  convertedAmount: number | null = null;

  constructor(private http: HttpClient) {}

  convert() {
    const url = `https://api.exchangerate.host/convert?from=${this.fromCurrency}&to=${this.toCurrency}&amount=${this.amount}`;

    this.http.get<any>(url).subscribe(response => {
      this.convertedAmount = response.result;
    });
  }
}
