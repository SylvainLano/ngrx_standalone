import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { phoneReducer } from './store/phone/phoneReducer';
import { cartReducer } from './store/cart/cartReducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ phoneReducer: phoneReducer, cartReducer: cartReducer })]
};
