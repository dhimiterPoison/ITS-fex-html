import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InsertPageComponent } from './insert-page/insert-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'insert', component: InsertPageComponent},
  { path: 'details/:id', component: DetailsPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
  ng generate component HomePage
  ng generate component InsertPage
  ng generate component DetailsPage
  ng generate component NotFoundPage
  ng generate service ProxyApi
*/
