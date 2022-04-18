import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsApiService } from '../../Services/posts-api.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  allPosts: Post[];

  displayedPosts : Post[];

  searchText: string;

  constructor(
    private postsApiService: PostsApiService,
  ) { }

  ngOnInit(): void {
    this.postsApiService.getPostsList().subscribe((posts) => {
      this.allPosts = posts;
      this.displayedPosts = posts;
    })
  }

  searchPosts() {
    if (this.searchText) {
      this.displayedPosts = this.allPosts.filter((el) => el.title?.includes(this.searchText))
    } else {
      this.displayedPosts = this.allPosts;
    }
  }

  clearSearch() {
    this.searchText = '';
    this.displayedPosts = this.allPosts;

  }
}
