export interface Tracks {
    track: Songarr[];
   
  }
  
  export interface Songarr {
    name: string;
    duration:number;
    playcount:number;
    listeners:number;
    url:string;
    artist:artistarr[];

  }
  export interface artistarr{
    name:string;
    mbid:string;
    url:string;
    image:imagearr[];

  }

  export interface imagearr{
    text:string;
  }
  