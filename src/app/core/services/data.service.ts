import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Comment, Post, User } from '../../models/response.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public users: User[] = [];
  public posts: Post[] = [];
  public displayedPosts: Post[] = [];
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

      this.displayedPosts = [...this.posts];
    });
  }

  public getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  public getPostById(id: number): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }

  public getPostsComments(postId: number): Comment[] {
    return this.comments.filter((comment) => comment.postId === postId);
  }

  public searchAndUpdatePosts(searchValue: string): void {
    const foundUsersIds = this.users
      .filter(
        (user) =>
          user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((user) => user.id);

    this.displayedPosts = this.posts.filter((post) =>
      foundUsersIds.includes(post.userId)
    );
  }
}
