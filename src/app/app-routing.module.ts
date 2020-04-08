import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GenresComponent } from './core/tabs/genres/genres.component';
import { WeeklyComponent } from './core/tabs/weekly/weekly.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './core/tabs/top/top.component';
import { ComicDetailComponent } from './comic/comic-detail/comic-detail.component';
import { ComicReaderComponent } from './comic/comic-reader/comic-reader.component';


const routes: Routes = [
  { path: '', redirectTo: '/weekly', pathMatch: 'full' },
  { path: 'weekly', component: WeeklyComponent },
  { path: 'top', component: TopComponent },
  { path: 'genres', component: GenresComponent },

  { path: 'detail/:seriesId', component: ComicDetailComponent },
  { path: 'reader/:episodeId', component: ComicReaderComponent },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
