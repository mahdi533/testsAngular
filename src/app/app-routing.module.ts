import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/posts',
    pathMatch:'full'
  },
  {
    path: 'posts',
    component: ListPostComponent
  } ,
  {
    path: 'posts/add',
    component: AddPostComponent
  } ,
  {
    path: 'posts/update/:index',
    component: UpdatePostComponent
  } ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
