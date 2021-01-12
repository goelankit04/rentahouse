import { SafePipe } from './../../../../common/safe-pipe';
import { Injectable } from '@angular/core';

@Injectable()
export class FlipBookUrlService {

  flipBookUrl = [
    {
      id: 1,
      url: 'http://flip.nurtr.com/bookcase/tdbyz'
    },
    {
      id: 2,
      url: 'http://flip.nurtr.com/bookcase/tdbyz'
    }
  ];

  constructor() { }

  getUrlById(id: number): any {
    return this.flipBookUrl.filter((url) => url.id === id)[0].url;
  }

}
