import { Comment } from './../../models/comment.model';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-comment-meta',
  templateUrl: './comment-meta.component.html'
})
export class CommentMetaComponent {
  @Input() comment: Comment;
}
