import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  // readonly impedisce di riassegnare il signal; il suo valore resta modificabile.
  // Il template legge il valore chiamando count(), non accedendo a count come numero.
  readonly count = signal(0);

  // Emette di quanto è cambiato il valore (+1 / -1), così il padre può sommare le variazioni.
  segnalaCambiamento = output<number>();

  increment(): void {
    const prima = this.count();
    // update calcola il nuovo valore a partire dal precedente.
    this.count.update((value) => Math.min(10, value + 1));
    // Ai limiti il valore non cambia: in quel caso non c'è niente da segnalare.
    if (this.count() !== prima) this.segnalaCambiamento.emit(1);
  }

  decrement(): void {
    const prima = this.count();
    // I valori negativi non sono ammessi: il minimo è 0.
    this.count.update((value) => Math.max(0, value - 1));
    if (this.count() !== prima) this.segnalaCambiamento.emit(-1);
  }
}
