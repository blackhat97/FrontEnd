import { TabsModule } from './tabs/tabs.module';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSiemaModule } from 'ngx-siema';
import { MaterialModule } from '../shared/modules/material.module';
import { ComicModule } from '../comic/comic.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TabsModule,
    ComicModule,
    NgxSiemaModule.forRoot()
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,

  ],
  declarations: [
  ],
  providers: [

  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
