import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number;

  // constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(query => {
      this.postId = query['id'];
      // this.httpClient
      //   .get('http://locallost/api/post/${this.postId}')
      //   .subscribe(postData => {
      //     this.postData = postData;
      //   });
    });

    // this.route.params.pipe(
    //   switchMap(parms => this.httpClinet.get('http://localhost/api/post/${parms.postId}'))
    // ).subscribe(postData => {
    //   this.postData = postData;
    // });
    this.route.queryParams.subscribe(query => {
      console.log(query);
    });
  }
}
