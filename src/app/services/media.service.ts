import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MediaService {

  mediaUrl = 'http://media.mw.metropolia.fi/wbma/';
  imgUrl = '';

  constructor(private http: HttpClient) { }

  getAllMedia() {
    return this.http.get(this.mediaUrl + '/media');
  }
}
