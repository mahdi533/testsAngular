import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  user;
  submited: boolean = false;
  id:any;
  currentDate = new Date();
  
  constructor(private ServicesServices:ServicesService, private route:Router,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('index');
      this.user = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cat: new FormControl('', [Validators.required]),
      date_post: new FormControl(this.currentDate),
    });
    const post = this.ServicesServices.getPostbyid(this.id);
    this.user.patchValue(post);
  }
  submitpost() {
    this.id = this.router.snapshot.paramMap.get('index');
    this.submited = true;
    if (this.user.invalid) {
      return;
    }else
    {
      this.ServicesServices.updatePost(this.id,this.user)
      this.route.navigateByUrl("/posts");
     
    }
  
  }

}
