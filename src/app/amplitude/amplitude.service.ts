import { Injectable } from '@angular/core';
import { events } from './events';
declare var amplitude;

@Injectable({
  providedIn: 'root'
})
export class AmplitudeService {

  setAmplitudeEvents(event_name: string, payload?: any) {
    switch (event_name) {
      case events.event_1:
        amplitude.getInstance().logEvent(event_name, payload);
        return amplitude.getInstance().setUserProperties(payload);
      default:
        return amplitude.getInstance().logEvent(event_name, payload);
    }
  }

  setUserId(email: string) {
    amplitude.getInstance().setUserId(email.toLowerCase());
    const identify = new amplitude.Identify().add('login_count', 1);
    amplitude.getInstance().identify(identify);
  }

  setAmountSpent(amount: number) {
    const identify = new amplitude.Identify()
      .add('product-count', 1)
      .add('amount-spent', amount);
    amplitude.getInstance().identify(identify);
  }

  setLogout() {
    const identify = new amplitude.Identify().add('logout_count', 1);
    amplitude.getInstance().identify(identify);
  }

  revenue(product_id: number, price: number, quantity: number) {
    var revenue = amplitude.Revenue().setProductId(product_id).setPrice(price).setQuantity(quantity);
    amplitude.getInstance().logRevenueV2(revenue);

  }

  recordEvent(event_name: string, event_value: any) {
    amplitude.getInstance().logEvent(event_name, event_value);
  }
  setVersion(version: string) {
    amplitude.getInstance().setVersionName(version);
  }

  setUserProperties(user: any) {
    amplitude.getInstance().setUserProperties(user);
  }

  recordUserSpecificEvent(email: string, country: string) {
    /**
     * 1. user utm source
     * 2. Invalid credential i.e input values
     * 3. email
     * 4. country
     */
    amplitude.Identify().set('email', email);
    amplitude.Identify().set('country', country);
  }
}
