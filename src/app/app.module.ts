import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsPageComponent } from './Pages/posts-page/posts-page.component';
import { PostDetailsPageComponent } from './Pages/post-details-page/post-details-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PostCardComponent } from './Components/post-card/post-card.component';
import { CommentComponent } from './Components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    PostDetailsPageComponent,
    CommentComponent,
    HomePageComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
