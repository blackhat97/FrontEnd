import { Component, Input } from '@angular/core';
import { Comment } from '../../shared/models/comment.model';

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
