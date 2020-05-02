import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSiemaModule } from 'ngx-siema';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { ComicStoreService } from '../shared/services/comic/comic-store.service';
import { ImagesService } from '../shared/services/comic/images.service';
import { ComicService } from '../shared/services/comic/comic.service';
import { SearchService } from '../shared/services/comic/search.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    NgxSiemaModule.forRoot()
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,

  ],
  declarations: [
  ],
  providers: [ComicService, SearchService, ImagesService, ComicStoreService]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
