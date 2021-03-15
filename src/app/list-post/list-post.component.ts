import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts:Array<any>;

  constructor(private ServicesServices:ServicesService) { }

  ngOnInit(): void {
  this.posts=this.ServicesServices.listpost();
  console.log(this.posts);
  
  }
  deletPost(i){
    this.ServicesServices.deletepost(i);
    window.location.reload(); 
    }
}
