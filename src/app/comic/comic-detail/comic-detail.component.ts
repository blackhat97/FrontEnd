import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
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
