import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  imports: [DecimalPipe],
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  // I dati arrivano dal padre come input; il prezzo è espresso in centesimi.
  readonly title = input('Titolo del prodotto');
  readonly description = input('Descrizione del prodotto');
  readonly price = input(0);
}
