import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './_components/home/home.component';
import {SearchComponent} from './_components/search/search.component';
import {AuthGuard} from './_guard/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
