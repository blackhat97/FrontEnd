import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommentsService } from '../../services/comment.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent {

  constructor(
    private commentService: CommentsService,
    private router: Router,
    private userService: UserService
  ) { }

  @Input() comment: Comment;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.pipe(concatMap(
      (authenticated) => {
        // Not authenticated? Push to login screen
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }

        if (!this.comment.favorited) {
          return this.commentService.favorite(this.comment.slug)
          .pipe(tap(
            data => {
              this.isSubmitting = false;
              this.toggle.emit(true);
            },
            err => this.isSubmitting = false
          ));

        } else {
          return this.commentService.unfavorite(this.comment.slug)
          .pipe(tap(
            data => {
              this.isSubmitting = false;
              this.toggle.emit(false);
            },
            err => this.isSubmitting = false
          ));
        }

      }
    )).subscribe();
  }


}
