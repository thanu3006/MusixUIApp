import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-top-playlists',
  templateUrl: './top-playlists.component.html',
  styleUrls: ['./top-playlists.component.css']
})
export class TopPlaylistsComponent implements OnInit {

   constructor() { }

  // ================================
  @Output()
  addMusic = new EventEmitter();
  @Output()
  deleteMusic=new EventEmitter();
  @Input()
  favCheck: boolean = false;
  @Input() music:any;
  player = new Audio;





  // ================================

  ngOnInit(): void {
  }


  addToFavouriteList()
  {
    this.addMusic.emit(this.music);
  }
  deleteMusicFav(){
    console.log(this.music);
    this.deleteMusic.emit(this.music);

    }

}
