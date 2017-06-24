import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class BookmarksService {

  private firebaseUrl = 'https://ng-shoppy.firebaseio.com/';

  constructor(private http: Http) { }

    getBookmarks() {

     return this.http.get(this.firebaseUrl + 'bookmarks.json')
      //return this.http.get( '${this.firebaseUrl}/bookmarks.json' )
        .toPromise()
        .then(response => this.convert(response.json()));
    }
   
  private convert(convertResponse){

    return Object.keys(convertResponse)
      .map(id => ({
        id: id,
        title: convertResponse[id].Title,
        url: convertResponse[id].Url,
      }))
      .sort((a,b) => a.title.localeCompare(b.title)) ;

  }
}
