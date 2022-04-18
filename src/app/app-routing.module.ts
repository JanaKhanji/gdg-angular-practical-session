import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PostDetailsPageComponent } from './Pages/post-details-page/post-details-page.component';
import { PostsPageComponent } from './Pages/posts-page/posts-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'posts',
    component: PostsPageComponent,
  },
  {
    path: 'posts/:postId',
    component: PostDetailsPageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
