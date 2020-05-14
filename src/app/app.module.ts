import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { WebpackTranslateLoader } from './webpack-translate-loader';
import { StorageService } from './shared/services/storage/storage.service';
import { DeviceDetectorModule } from 'ngx-device-detector';

/* CORE MODULE */
import { CoreModule } from './core/core.module';
/* ROUTING */
import { AppRoutingModule } from './app-routing.module';
/* COMPONENT */
import { AppComponent } from './app.component';
import { ComicListComponent } from './comics/comic-list/comic-list.component';
import { ComicsComponent } from './comics/comics.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
/* SHARED */
import { SharedModule } from './shared/shared.module';
import { SeriesComponent } from './comics/series/series.component';
import { ViewerComponent } from './comics/viewer/viewer.component';
import { ViewerArrowComponent } from './comics/viewer/viewer-arrow/viewer-arrow.component';

@NgModule({
   declarations: [
      AppComponent,
      ComicsComponent,
      ComicListComponent,
      SeriesComponent,
      ViewerComponent,
      ViewerArrowComponent,
      PageNotFoundComponent,
   ],
   imports: [
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useClass: WebpackTranslateLoader
         }
      }),
      BrowserModule,
      AppRoutingModule,
      LazyLoadImageModule,
      CoreModule,
      SharedModule,
      DeviceDetectorModule.forRoot()
  ],
  providers: [
   StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
