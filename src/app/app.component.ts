import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { BookmarksService } from './bookmarks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 bookmarks = [];

  constructor(private bookmarksService : BookmarksService)
  {
    this.bookmarksService.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks);
  }

}
