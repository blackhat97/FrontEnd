import { Injectable } from '@angular/core';
import { ComicService } from './comic.service';
import { Router } from '@angular/router';
import { Comic } from 'src/app/shared/models/comic.model';

type ComicFilter = (filter: Comic[]) => Comic[];

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public onSearch: (ComicFilter) => void = () => [];

  constructor(
    private comicService: ComicService,
    private router: Router
  ) { }

  private searchComic(query: string): ComicFilter {
    return (comics: Comic[]) => {
      query = query.toLowerCase();
      return comics.filter(comic => 
        comic.title.toLowerCase().includes(query) ||
        comic.tagline.toLowerCase().includes(query) ||
        comic.description.toLocaleLowerCase().includes(query)
      );
    };
  }

  public findComics(query: string) {
    this.router.navigateByUrl('/series').then(() => {
      this.onSearch(this.searchComic(query));
    });
  }

}
