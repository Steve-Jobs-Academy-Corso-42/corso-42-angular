# Corso 42 · Angular

Laboratorio didattico di **Steve Jobs Academy — corso 42**. Il progetto parte da un piccolo catalogo per introdurre componenti standalone, template, eventi e stato reattivo con signals.

Il nome `corso-42-angular` segue la convenzione della repository `corso-34-angular` dell'organizzazione del corso 34. L'organizzazione di riferimento è [Steve-Jobs-Academy-Corso-42](https://github.com/Steve-Jobs-Academy-Corso-42).

## Avvio rapido

Servono Node.js **22.22.3 o successivo della serie 22** (oppure una versione compatibile indicata in `package.json`) e npm. Il file `.nvmrc` seleziona la serie 22; se usi nvm:

```bash
nvm install
nvm use
npm ci
npm start
```

Senza nvm, verifica la versione con `node --version`, poi esegui `npm ci` e `npm start`. Apri **http://localhost:4200/**. Il server aggiorna automaticamente la pagina quando modifichi i sorgenti.

## Cosa provare

- Cambia il titolo di una card: le altre quattro restano invariate.
- Incrementa e decrementa i tre contatori: ogni istanza ha uno stato indipendente e può scendere sotto zero.
- Usa la navbar per raggiungere le sezioni della stessa pagina.
- Riduci la larghezza della finestra o naviga con Tab per esplorare il layout responsive e i controlli da tastiera.

Le card sono esempi didattici: non rappresentano prodotti caricati da un backend. Non sono presenti carrello, persistenza o chiamate API.

## Struttura

```text
src/
├── main.ts                      # Avvio dell'applicazione
├── index.html                   # Documento HTML e tag app-root
├── styles.scss                  # Tema, reset e regole condivise
└── app/
    ├── app.ts / .html / .scss    # Composizione e layout del laboratorio
    ├── app.config.ts            # Provider dell'applicazione
    ├── app.routes.ts            # Punto di partenza per la lezione sul routing
    └── components/
        ├── navbar/              # Navigazione con link ad ancora
        ├── product-card/        # Interpolazione e signal.set()
        └── counter/             # Event binding e signal.update()
```

Ogni componente raccoglie TypeScript, template HTML e SCSS nella propria cartella. Gli stili dei componenti sono incapsulati da Angular; le variabili CSS del tema sono condivise. Non servono ulteriori livelli di cartelle per questi tre esempi.

## Percorso di lettura

1. Parti da `src/main.ts`: `bootstrapApplication` avvia il componente radice.
2. Apri `app.ts` e `app.html`: `imports` rende disponibili i componenti figli al template.
3. Leggi `product-card.ts` e il suo HTML: `title()` legge il signal, `set()` sostituisce il valore e `{{ ... }}` lo mostra.
4. Leggi `counter.ts` e il suo HTML: `(click)` richiama un metodo e `update()` usa il valore precedente.
5. Osserva le istanze ripetute in `app.html`: ciascuna ha il proprio stato locale.

`readonly` impedisce di riassegnare la proprietà che contiene il signal; non impedisce di modificarne il valore con `set()` o `update()`.

Il router è predisposto, ma la lista di route è vuota. Le sezioni attuali usano ancore HTML. Quando aggiungerai pagine, configura `app.routes.ts`, importa `RouterOutlet` e inserisci `<router-outlet />` nel template.

## Comandi

| Comando                | Scopo                                             |
| ---------------------- | ------------------------------------------------- |
| `npm start`            | Server di sviluppo                                |
| `npm run build`        | Build di produzione in `dist/corso-42-angular/`   |
| `npm run watch`        | Build di sviluppo con ricompilazione automatica   |
| `npm run format`       | Formatta i file con Prettier                      |
| `npm run format:check` | Verifica la formattazione senza modificare i file |

Per creare un altro componente:

```bash
npm run ng -- generate component components/nome-componente
```

## Note per le prossime lezioni

Possibili evoluzioni: input per personalizzare le card, output per comunicare con il genitore, un modello `Product`, liste con `@for`, routing e infine un servizio HTTP. Aggiungi questi elementi quando diventano parte del corso.

## Riferimenti

- [Angular Essentials](https://angular.dev/essentials)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular Style Guide](https://angular.dev/style-guide)

Stack: Angular e CLI **22.2**, TypeScript **6** e SCSS. Le versioni risolte delle dipendenze sono registrate in `package-lock.json`.
