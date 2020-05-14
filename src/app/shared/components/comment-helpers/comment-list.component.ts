import { Comment } from './../../models/comment.model';
import { Component, Input } from '@angular/core';
import { CommentsService } from 'src/app/shared/services/comment.service';
import { CommentListConfig } from '../../models/comment-list-config.model';

@Component({
  selector: 'app-comment-list',
  styleUrls: ['comment-list.component.scss'],
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent {
  constructor (
    private commentsService: CommentsService
  ) {
  }

  @Input() limit: number;
  @Input()
  set config(config: CommentListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: CommentListConfig;
  results: Comment[];
  loading = false;
  currentPage = 1;

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    this.commentsService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      console.log(data);
      this.results = data.comments;

    });
  }
}
