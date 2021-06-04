import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxTimelineModule } from 'ngx-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

const oktaConfig = {
  issuer: 'https://dev-29495065.okta.com/oauth2/default',
  clientId: '0oavmiwkhgx8tM0sD5d6',
  redirectUri: window.location.origin + '/callback'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgxTimelineModule,
    ModalModule.forRoot(),
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }