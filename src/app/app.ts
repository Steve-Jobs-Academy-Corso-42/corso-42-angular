import { Component } from '@angular/core';
import { Counter } from './components/counter/counter';
import { Navbar } from './components/navbar/navbar';
import { ProductCard } from './components/product-card/product-card';

// Il componente radice compone la pagina: la logica dei singoli esempi resta nei figli.
// I componenti standalone usati nel template vanno dichiarati in imports.
@Component({
  selector: 'app-root',
  imports: [Navbar, Counter, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  contatoreTotale = 0;
}
