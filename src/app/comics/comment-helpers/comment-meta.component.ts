import { Component, Input } from '@angular/core';
import { Comment } from '../../shared/models/comment.model';


@Component({
  selector: 'app-comment-meta',
  templateUrl: './comment-meta.component.html'
})
export class CommentMetaComponent {
  @Input() comment: Comment;
}
