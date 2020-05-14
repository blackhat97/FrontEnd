import { Comment } from './../../models/comment.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-preview',
  templateUrl: './comment-preview.component.html'
})
export class CommentPreviewComponent {
  @Input() comment: Comment;

  onToggleFavorite(favorited: boolean) {
    this.comment['favorited'] = favorited;

    if (favorited) {
      this.comment['favoritesCount']++;
    } else {
      this.comment['favoritesCount']--;
    }
  }
}
