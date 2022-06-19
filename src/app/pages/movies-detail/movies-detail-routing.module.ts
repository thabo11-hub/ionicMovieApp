import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesDetailPage } from './movies-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesDetailPageRoutingModule {}
