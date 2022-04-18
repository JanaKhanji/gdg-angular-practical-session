import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {
  url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  getPostsList(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}/posts`);
  }

  getPost(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.url}/posts/${id}`);
  }

  getPostComment(id: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.url}/posts/${id}/comments`);
  }
}
