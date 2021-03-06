import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/response.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  
  @Input()
  comment!: Comment;

  constructor() {}
}
