import { comicURL, searchURL } from '../../../configs/url.config';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ComicCategoryModel } from '../../../shared/models/comic-category.model';
import { ComicDetailsModel } from '../../models/movie-details.model';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


  getComic(category: string, lang: string) {
    switch (category) {
      case 'weekly': return this.getWeekly();
      case 'genre': return this.getGenre();
      case 'top': return this.getTop();
    }
  }

  getWeekly(): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`
      ${comicURL}/weekly
    `);
  }
  getGenre(): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`
      ${comicURL}/weekly
    `);
  }
  getTop(): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`
      ${comicURL}/rank
    `);
  }
  getDetailsComic(comicID: number): Observable<ComicDetailsModel> {
    return this.http.get<ComicDetailsModel>(`${comicURL}/${comicID}`);
  }
  getSimilarComics(comicID: number): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`${comicURL}/${comicID}/similar`);
  }
  getEpisodeContents(chapterID: number): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`${comicURL}/contents/${chapterID}`);
  }
  getSearchComic(name: string, page: number): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`
      ${searchURL}?query=${name}&page=${page}
    `);
  }

  /*
  public getWeekly() {
    this.http.get(`${apiURL}/comic_weekly.json`).toPromise()
      .then((data: any) => {
        return data;
      }).catch((e) => {
          console.error(e);
      });
  }

  public getTop(): Observable<any> {
    return this.http.get(`${apiURL}/comic_top.json`).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(e => {
        throw new Error(e);
      })
    );
  }

  public getGenre(): Promise<any> {
    return Promise.all([
      this.http.get(`${apiURL}/comic_genre.json`)
      .toPromise()
      .then((data: any) => {
        console.log(data);
      })
    ]);
  }
  */


}
