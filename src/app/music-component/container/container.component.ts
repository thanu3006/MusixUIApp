import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from 'src/app/auth/music.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
@Input()
  musicList: any=[];

  @Input()
  favCheck:boolean=false;
  constructor(private musicService:MusicService) { }

  ngOnInit(): void {
  }

}
