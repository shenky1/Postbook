import { Component, Input, OnInit } from '@angular/core';
import { Comment, Post, User } from 'src/app/models/response.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post | undefined;

  public user: User | undefined;
  public comments: Comment[] = [];

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    if (!this.post) {
      return;
    }

    this.user = this.dataService.getUserById(this.post.userId);
    this.comments = this.dataService.getPostsComments(this.post.id);
  }
}
