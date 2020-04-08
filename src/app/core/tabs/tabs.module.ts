import { WeeklyComponent } from './weekly/weekly.component';
import { GenresComponent } from './genres/genres.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { TopListItemComponent } from './top/top-list-item/top-list-item.component';

@NgModule({
  declarations: [
    TopComponent,
    GenresComponent,
    WeeklyComponent,
    TopListItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RouterModule,
    TopListItemComponent,
  ]
})
export class TabsModule {}