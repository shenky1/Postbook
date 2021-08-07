import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Comment, Post, User } from '../models/response.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public users: User[] = [];
  public posts: Post[] = [];
  public comments: Comment[] = [];

  constructor(private httpService: HttpService) {
    forkJoin({
      users: this.httpService.getUsers(),
      posts: this.httpService.getPosts(),
      comments: this.httpService.getComments(),
    }).subscribe((res) => {
      this.users = res.users;
      this.posts = res.posts;
      this.comments = res.comments;
    });
  }

  public getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  public getPostsComments(postId: number): Comment[] {
    return this.comments.filter((comment) => comment.postId === postId);
  }
}
