import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Comment } from '../models/comment.model';
import { CommentListConfig } from '../models/comment-list-config.model';

@Injectable()
export class CommentsService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: CommentListConfig): Observable<{comments: Comment[], commentsCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    return this.apiService
    .get(
      '/comments/' + config.id,
      new HttpParams({ fromObject: params })
    );
  }




}
