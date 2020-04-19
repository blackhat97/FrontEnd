import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GenresComponent } from './core/tabs/genres/genres.component';
import { WeeklyComponent } from './core/tabs/weekly/weekly.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './core/tabs/top/top.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './comics/series/series.component';
import { ViewerComponent } from './comics/viewer/viewer.component';


const routes: Routes = [
  { path: 'comics/:category', component: ComicsComponent, runGuardsAndResolvers: 'always' },
  { path: 'series/:id', component: SeriesComponent },
  { path: 'viewer/:id', component: ViewerComponent },

  { path: 'about', loadChildren: () => import('src/app/pages/about/about.module').then(m => m.AboutModule) },

  { path: '', redirectTo: '/comics/weekly', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
