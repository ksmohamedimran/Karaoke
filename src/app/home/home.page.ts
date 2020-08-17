import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private streamingMedia: StreamingMedia) {}
  Details = [ 
    {
      'name':'Imran',
      'url':'',
      'Title':'Song 1',
      'ImageUrl':'../../assets/icon/musical.png'
    },
    {
      'name':'Imran',
      'url':'',
      'Title':'Song 2',
      'ImageUrl':'../../assets/icon/musical.png'
    },
    {
      'name':'Imran',
      'url':'',
      'Title':'Song 3',
      'ImageUrl':'../../assets/icon/musical.png'
    },
    {
      'name':'Imran',
      'url':'',
      'Title':'Song 4',
      'ImageUrl':'../../assets/icon/musical.png'
    },{
      'name':'Imran',
      'url':'',
      'Title':'Song 5',
      'ImageUrl':'../../assets/icon/musical.png'
    }
  ];
  play() {

    let options: StreamingVideoOptions = {
    
    successCallback: () => { console.log('Video played') },
    
    errorCallback: (e) => { console.log('Error streaming') },
    
    orientation: 'portrait',
    
    shouldAutoClose: true,
    
    controls: true
    
    };
    
    this.streamingMedia.
    playVideo('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', options);
    
    }
}
