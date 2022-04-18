import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';
import { PostsApiService } from '../../Services/posts-api.service';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css']
})
export class PostDetailsPageComponent implements OnInit {
  postId: string;

  post: Post;

  comments: Comment[];

  loadingPost = true;

  loadingComments = true;

  constructor(
    private route: ActivatedRoute,
    private postsApiService: PostsApiService,
  ) { }

  ngOnInit(): void {
    const route =  this.route.snapshot.paramMap.get('postId')
    this.postId = route ? route : '';
    this.postsApiService.getPost(this.postId).subscribe((post) => {
      this.post = post;
      this.loadingPost = false;
    })
    this.postsApiService.getPostComment(this.postId).subscribe((comments) => {
      this.comments = comments;
      this.loadingComments = false;
    })
  }

}
