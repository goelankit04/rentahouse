import { Injectable } from '@angular/core';
import { ProductHighlightComponent } from './product-highlight/product-highlight/product-highlight.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class routerDeactivateGuard implements CanDeactivate<any> {
  canDeactivate(component: ProductHighlightComponent): boolean {
    if (
      confirm(
        'You have unsaved changes! If you leave, your changes will be lost.'
      )
    ) {
      console.log('confirm');
      return true;
    } else {
      return false;
    }
  }
}
