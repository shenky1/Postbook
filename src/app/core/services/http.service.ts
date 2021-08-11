import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Post, Comment } from '../../models/response.model';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(USERS_URL);
  }

  public getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(POSTS_URL);
  }

  public getComments(): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(COMMENTS_URL);
  }
}
