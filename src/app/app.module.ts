import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './_material/material/material.module';
import { HomeComponent } from './_components/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { SearchComponent } from './_components/search/search.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { StockInfoComponent } from './_components/stock-info/stock-info.component';
import { MySharesComponent } from './_components/my-shares/my-shares.component';
import {TokenInterceptor} from './_interceptor/token.interceptor';
import { ConfirmComponent } from './_components/my-shares/confirm/confirm.component';
import { NewsComponent } from './_components/news/news.component';
import { CalendarComponent } from './_components/calendar/calendar.component';
import { EconomicalComponent } from './_components/calendar/economical/economical.component';
import { CompaniesComponent } from './_components/calendar/companies/companies.component';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RealtimeNewsComponent } from './_components/realtime-news/realtime-news.component';
import { LatestNewsComponent } from './_components/latest-news/latest-news.component';
import { PalmaresComponent } from './_components/palmares/palmares.component';


export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
  };
  options: {
    touchAction: 'auto'
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    StockInfoComponent,
    MySharesComponent,
    ConfirmComponent,
    NewsComponent,
    CalendarComponent,
    EconomicalComponent,
    CompaniesComponent,
    RealtimeNewsComponent,
    LatestNewsComponent,
    PalmaresComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmComponent]
})
export class AppModule { }
