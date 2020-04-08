import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Chapter, Page, Comic } from 'src/app/shared/models/comic.model';
import { ComicService } from '../shared/comic.service';
import { ComicMaps } from '../comic-maps';

@Component({
  selector: 'app-comic-viewer',
  templateUrl: './comic-viewer.component.html',
  styleUrls: ['./comic-viewer.component.scss']
})
export class ComicViewerComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject();
  private static pagesToPreload = 5;

  public imageLoading = true;

  private chapterMap: Map<number, [number, Chapter]> = new Map<number, [number, Chapter]>();
  private comicMaps: ComicMaps;

  @Input() comic: Comic = Comic.empty;
  @Input() page: Page = Page.empty;
  @Input() chapter: Chapter;
  
  scrollConfig = {
    suppressScrollX: false,
    suppressScrollY: false
  };

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService,
    

  ) { }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.route.params
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((params: Params) => {
      console.log(params);
    });

  }


  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
