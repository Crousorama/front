import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './_components/home/home.component';
import {SearchComponent} from './_components/search/search.component';
import {AuthGuard} from './_guard/auth.guard';
import {MySharesComponent} from './_components/my-shares/my-shares.component';
import {NewsComponent} from './_components/news/news.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'my-shares', component: MySharesComponent, canActivate: [AuthGuard]},
  {path: 'news', component: NewsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
