import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InsertPageComponent } from './insert-page/insert-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent  },
  { path: 'insert', component: InsertPageComponent  },
  { path: 'items', component: ListPageComponent  },
  { path: 'items/:id', component: DetailsPageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
