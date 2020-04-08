import { mockURL } from './../../configs/url.config';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public getWeekly() {
    this.http.get(`${mockURL}/comic_weekly.json`).toPromise()
      .then((data: any) => {
        console.log(data);
        return data;
      }).catch((e) => {
          console.error(e);
      });
  }

  public getTop(): Observable<any> {
    return this.http.get(`${mockURL}/comic_top.json`).pipe(
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
      this.http.get(`${mockURL}/comic_genre.json`)
      .toPromise()
      .then((data: any) => {
        console.log(data);
      })
    ]);
  }


}
