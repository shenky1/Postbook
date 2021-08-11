import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/response.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  public post: Post | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    const id = this.route.snapshot.paramMap.get('id');
    const post = this.dataService.getPostById(Number(id));
    if (post) {
      this.post = post;
    }
   }

  ngOnInit(): void {
  }

}
