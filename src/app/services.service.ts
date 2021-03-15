import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  addpost(post){
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post)
    localStorage.setItem('posts',JSON.stringify(posts));
  };
  listpost(){
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    return posts;
  };
  deletepost(id){
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(id,1);
    localStorage.setItem('posts',JSON.stringify(posts));

  }
  getPostbyid(id){
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    return posts[id];
  }
  updatePost(id,post){
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(id,1,post.value);
    localStorage.setItem('posts',JSON.stringify(posts));

  }
}
