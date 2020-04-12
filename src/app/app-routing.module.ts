import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './_components/home/home.component';
import {AuthGuard} from './_guard/auth.guard';
import {MySharesComponent} from './_components/my-shares/my-shares.component';
import {NewsComponent} from './_components/news/news.component';
import {CalendarComponent} from './_components/calendar/calendar.component';
import {PalmaresGlobalComponent} from './_components/palmares-global/palmares-global.component';
import {BfmSearchComponent} from './_components/bfm-search/bfm-search.component';
import {StockComponent} from './_components/stock/stock.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: BfmSearchComponent, canActivate: [AuthGuard]},
  {path: 'stock/:stockId', component: StockComponent, canActivate: [AuthGuard]},
  {path: 'my-shares', component: MySharesComponent, canActivate: [AuthGuard]},
  {path: 'news', component: NewsComponent, canActivate: [AuthGuard]},
  {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
  {path: 'palmares', component: PalmaresGlobalComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
