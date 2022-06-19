import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesDetailPageRoutingModule } from './movies-detail-routing.module';

import { MoviesDetailPage } from './movies-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesDetailPageRoutingModule
  ],
  declarations: [MoviesDetailPage]
})
export class MoviesDetailPageModule {}
