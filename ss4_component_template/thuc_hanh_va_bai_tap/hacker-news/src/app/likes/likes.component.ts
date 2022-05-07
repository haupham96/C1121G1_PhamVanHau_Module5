import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  like:number = 0 ;
  likeThis(){
    this.like++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
