import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  // Ogni istanza possiede il proprio signal: modificare una card non cambia le altre.
  readonly title = signal('Product Card');
  readonly description = signal('This is a product card component.');
  readonly price = signal(19.9);

  changeTitle(): void {
    // set sostituisce il valore direttamente; Angular aggiorna il testo nel template.
    this.title.set('TITOLO CAMBIATO');
  }
}
