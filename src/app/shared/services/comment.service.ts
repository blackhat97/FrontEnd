import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Comment } from '../models/comment.model';

@Injectable()
export class CommentsService {
  constructor (
    private apiService: ApiService
  ) {}

  query(): Observable<{articles: Comment[], articlesCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    return this.apiService
    .get(
      '/comments',
      new HttpParams({ fromObject: params })
    );
  }




}
