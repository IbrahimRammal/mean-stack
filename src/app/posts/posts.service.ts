import { Post } from './post.model';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

//angular will provide it to providers and make one intace from this service for all project
@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]; //To make new copy not refrense from post array
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPosts(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
