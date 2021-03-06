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
    const params = {};
    return this.apiService
    .get(
      '/comments/' + config.id,
      new HttpParams({ fromObject: params })
    );
  }

  favorite(slug): Observable<Comment> {
    return this.apiService.post('/comments/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Comment> {
    return this.apiService.delete('/comments/' + slug + '/favorite');
  }


}
