import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppMaterialModule } from '../app-material-module';
import { FooterRoutingModule } from './footer-routing.module';

import { ContactComponent } from './contact/contact.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { FooterComponent } from './footer.component';
import { SocialComponent } from './social/social.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    ContactComponent,
    FooterComponent,
    FooterNavigationComponent,
    SocialComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FooterRoutingModule
  ],
  exports: [
    ContactComponent,
    FooterComponent,
    FooterNavigationComponent,
    SocialComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FooterModule {
}
