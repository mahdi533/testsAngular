import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  user;
  submited: boolean = false;
  currentDate = new Date();

  constructor(private ServicesServices: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.user = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cat: new FormControl('', [Validators.required]),
      date_post: new FormControl(this.currentDate),
    });
  }
  submitpost() {
    this.submited = true;
    if (this.user.invalid) {
      return;
    }
    this.ServicesServices.addpost(this.user.value);
    this.route.navigateByUrl("posts");
  }
}
