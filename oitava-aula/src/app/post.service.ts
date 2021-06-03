import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://news-api-node.herokuapp.com/api/v1/news/'

  constructor(private http: HttpClient) { }

  getPostByProjectUUID(uuid: string) : Observable<Post[]> {
    return this.http.get<Post[]>(this.url + uuid)
  }

  save(post: Post, uuid: string) : Observable<Post> {
    return this.http.post<Post>(this.url + uuid, post)
  }

  delete(uuid: string, postId: number) : Observable<Post> {
    return this.http.delete<Post>(this.url + uuid + "/" + postId)
  }

}
