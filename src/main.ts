import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Avvia l'applicazione standalone montando App nel tag <app-root> di index.html.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
