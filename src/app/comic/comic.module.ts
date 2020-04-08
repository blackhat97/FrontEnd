import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ComicReaderComponent } from './comic-reader/comic-reader.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicCommentComponent } from './comic-comment/comic-comment.component';
import { ComicService } from './shared/comic.service';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    exports: [
        ComicReaderComponent,
    ],
    declarations: [
        ComicReaderComponent,
        ComicDetailComponent,
        ComicCommentComponent,
    ],
    providers: [ComicService]
})
export class ComicModule { }
