import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ComicService } from 'src/app/shared/services/database/comic.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();
  comics: any[];
  productsLoading: boolean;

  constructor(
    private comicService: ComicService,

  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsLoading = true;
    this.comicService
      .getTop()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((products) => {
        this.productsLoading = false;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}