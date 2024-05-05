import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.postService.getDashboardPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
