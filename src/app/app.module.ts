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
import { ServiceWorkerModule } from '@angular/service-worker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
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
import { PalmaresGlobalComponent } from './_components/palmares-global/palmares-global.component';
import { DividendComponent } from './_components/dividend/dividend.component';
import { BfmSearchComponent } from './_components/bfm-search/bfm-search.component';
import { StockComponent } from './_components/stock/stock.component';
import { CoursComponent } from './_components/stock/cours/cours.component';
import { GraphiqueComponent } from './_components/stock/graphique/graphique.component';
import { SafePipe } from './_pipes/safe.pipe';
import { ActualitesComponent } from './_components/stock/actualites/actualites.component';
import { ConseilsComponent } from './_components/stock/conseils/conseils.component';
import { AgendaComponent } from './_components/stock/agenda/agenda.component';
import { DividendesComponent } from './_components/stock/dividendes/dividendes.component';
import { SocieteComponent } from './_components/stock/societe/societe.component';


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
    MySharesComponent,
    ConfirmComponent,
    NewsComponent,
    CalendarComponent,
    EconomicalComponent,
    CompaniesComponent,
    RealtimeNewsComponent,
    LatestNewsComponent,
    PalmaresComponent,
    PalmaresGlobalComponent,
    DividendComponent,
    BfmSearchComponent,
    StockComponent,
    CoursComponent,
    GraphiqueComponent,
    SafePipe,
    ActualitesComponent,
    ConseilsComponent,
    AgendaComponent,
    DividendesComponent,
    SocieteComponent
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
