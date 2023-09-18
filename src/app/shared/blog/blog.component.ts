import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: any = [];
  count = 0;
  mais = true;
  menos = false;
  constructor() { }
  getPosts(){
    return new Promise((resolve, reject) => {
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=291794939.f03e244.1e8fb8f92c754fd09884df6eefca9413')
      .then(res => {
        let data = res.data.data.filter(elm => {
          return elm.tags[0] == 'dev';
        });
        resolve(data);
      })
      .catch(err => {
        console.log(err)
        reject(err); 
      });
    });
  }

  public formatarData(data){
    return moment(data).format("DD [de] MMMM [de] YYYY")
  }
  public loadLess(){
    this.posts = [];
    this.count = 0; 
    for(let i = 0; i < 3; i++){
      this.posts.push(this.all[i]);
    }
    this.menos = false;
  }
  public loadMore(){
  this.count += 3; 
  this.menos = true;
  console.log('Valor de count :'+ this.count);
    for( let i = this.count; i < this.count + 3; i++){
      console.log(this.all.length +' = '+ i);
      if( this.all.length <= i){
        this.mais = false;
        return;
      } 
      this.posts.push(this.all[i]);
    }
  }
  all: any = [];
  ngOnInit() {
    this.getPosts()
    .then(data => {
      // console.log(data);
      for(let i = 0; i < 3; i++){
        this.posts.push(data[i]);
      }
      this.all = data;
    })
    .catch(err => console.log(err));
    
  }

}
