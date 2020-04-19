import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ShareModalComponent } from 'src/app/shared/components/share-modal/share-modal.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ComicService } from 'src/app/shared/services/database/comic.service';
import { TranslateService } from '@ngx-translate/core';
import { ComicDetailsModel } from 'src/app/shared/models/movie-details.model';
import { forkJoin } from 'rxjs';
import { ComicModel } from 'src/app/shared/models/comic.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  id: number;
  series: ComicDetailsModel;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  isLoadingResults: boolean;
  isConnected = false;
  similarComics: ComicModel[];

  constructor(
    public dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute,
    private comicService: ComicService,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      const dataInfo = this.comicService.getDetailsComic(this.id);
      const similarComic = this.comicService.getSimilarComics(this.id);

      forkJoin(dataInfo, similarComic).subscribe(([series, similar]) => {
        this.isLoadingResults = false;
        this.series = series;
        this.similarComics = similar.results;
      });

    });

  }

  back() {
    this.location.back();
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (action === this.SWIPE_ACTION.RIGHT || action === this.SWIPE_ACTION.LEFT) {
      this.location.back();
    }
  }

  shareDialog(comic: any): void {
    this.dialog.open(ShareModalComponent, {
      data: { id: comic.comicID, original_title: comic.title }
    });
  }

}
