import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// AmplifyModule
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
// import awsmobile from '/aws-exports';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// API.configure(awsmobile);