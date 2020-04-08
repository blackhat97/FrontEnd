import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicCommentComponent } from './comic-comment/comic-comment.component';
import { ComicViewerComponent } from './comic-viewer/comic-viewer.component';
import { ComicService } from './shared/comic.service';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
    PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        PerfectScrollbarModule,
    ],
    exports: [
        ComicViewerComponent,
    ],
    declarations: [
        ComicViewerComponent,
        ComicDetailComponent,
        ComicCommentComponent,
    ],
    providers: [ComicService]
})
export class ComicModule { }
