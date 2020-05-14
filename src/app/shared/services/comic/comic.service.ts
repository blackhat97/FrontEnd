import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ComicCategoryModel } from '../../models/comic-category.model';
import { ComicDetailModel } from '../../models/comic-detail.model';
import { ComicStoreService, PageListData } from './comic-store.service';
import { PageModel } from '../../models/page.model';
import { ImagesService } from './images.service';
import { ComicViewerModel } from '../../models/comic-viewer.model';
import { environment } from 'src/environments/environment.prod';

const URL = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private imageService: ImagesService,
    private comicStoreService: ComicStoreService
  ) { }


  getComic(category: string, lang: string) {
    switch (category) {
      case 'weekly': return this.getWeekly();
      case 'genres': return this.getGenre();
      case 'top': return this.getTop();
    }
  }

  getWeekly(): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`
      ${URL}/comic/weekly
    `);
  }
  getGenre(): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`
      ${URL}/comic/weekly
    `);
  }
  getTop(): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`
      ${URL}/comic/rank
    `);
  }
  getDetailsComic(comicID: number): Observable<ComicDetailModel> {
    return this.http.get<ComicDetailModel>(`${URL}/comic/${comicID}`);
  }
  getSimilarComics(comicID: number): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`${URL}/comic/${comicID}/similar`);
  }
  getEpisodeContents(chapterID: number): Observable<ComicViewerModel> {
    return this.http.get<ComicViewerModel>(`${URL}/comic/contents/${chapterID}`);
  }
  getSearchComic(name: string, page: number): Observable<ComicCategoryModel> {
    return this.http.get<ComicCategoryModel>(`
      ${URL}?query=${name}&page=${page}
    `);
  }

  
  private loadComicType(chapterID: string, setter: (comics: PageModel[]) => void) {
    this.comicStoreService.getCachedPageList(chapterID).then((cached: PageModel[]) => {
        setter(cached);
        this.http.get(URL + '/comic/contents/' + chapterID).toPromise()
            .then((data: PageListData[]) => {
                data.forEach(item => item.imgurl = this.imageService.getImageUrl(item.imgurl));
                setter(data.map(this.comicStoreService.unpackPageListItem));
                this.comicStoreService.cachePageList(data, name);
            }).catch((e) => {
                console.error(e);
            });
    });
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
