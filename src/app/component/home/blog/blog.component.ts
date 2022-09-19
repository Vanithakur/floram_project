import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogs:any;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlog().subscribe(res=>{
      this.blogs = res;
    })
  }

}
