import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/auth/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musicList: any[]=[];
  constructor(private musicService: MusicService) {
    this.musicList=[];
   }


  ngOnInit(): void {
     this.musicService.topMusic().subscribe((result)=>{
       console.log(result.tracks);
       return this.musicList=result['tracks'];
      
     })
  }

}
