import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  // readonly impedisce di riassegnare il signal; il suo valore resta modificabile.
  // Il template legge il valore chiamando count(), non accedendo a count come numero.
  readonly count = signal(0);

  increment(): void {
    // update calcola il nuovo valore a partire dal precedente.
    this.count.update((value) => Math.min(10, value + 1));
  }

  decrement(): void {
    // I valori negativi sono ammessi: questo è un contatore, non una quantità d'acquisto.
    this.count.update((value) => Math.max(0, value - 1));
  }
}
