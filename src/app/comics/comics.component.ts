import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { StorageService } from '../shared/services/storage/storage.service';
import { Subscription, Observable } from 'rxjs';
import { ComicService } from '../shared/services/comic/comic.service';
import { ComicModel } from '../shared/models/comic.model';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  request: Observable<any>;
  comics: ComicModel[];
  parameter: string | number;
  title: string | number;
  loading: boolean;
  lang: string;
  navigationSubscription: Subscription;
  moviesType: Params;

  constructor(
    private comicService: ComicService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,

  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.reloadScroll();
      }
    });
    this.route.params.subscribe((params: Params) => {
      this.moviesType = params;
    });
  }

  ngOnInit() {
    this.loading = true;
    this.lang = this.storageService.read('language');

  }

  getComics(params: Params) {
    if (params.category) {
      this.request = this.comicService.getComic(
        params.category,
        this.lang,
      );
      this.parameter = params.category;
    } else {
      this.request = null;
      this.loading = false;
    }

    if (this.request) {
      this.request.subscribe(response => {
        this.comics = response.results;
        this.loading = false;
        this.title = this.parameter;

      }, error => {
        this.loading = false;
      });
    }
    this.loading = false;
  }

  reloadScroll() {
    this.getComics(this.moviesType);
  }


}
