import { Component, Input } from '@angular/core';
import { Comment } from '../../shared/models/comment.model';
import { CommentsService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-article-list',
  styleUrls: ['comment-list.component.css'],
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent {
  constructor (
    private commentsService: CommentsService
  ) {}

  @Input() limit: number;


  results: Comment[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];


    this.commentsService.query()
    .subscribe(data => {
      this.loading = false;
      this.results = data.articles;

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    });
  }
}
