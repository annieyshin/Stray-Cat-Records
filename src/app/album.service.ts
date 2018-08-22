import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  //   List is included in FirebaseListObservable because the data we'll request from Firebase will be a list of all Albums in our database. There is also a FirebaseObjectObservable object available to use when we're only returning a single object. We'll use this in an upcoming lesson.
  //
  // Observable is a type of design pattern. In this design pattern, a thing being observed notifies anything observing it when changes to its content occur. This is how Firebase works; our service observes the areas of our database we instruct it to. If changes occur, Firebase immediately notifies us, and the application updates accordingly. (At the end of this lesson, try deleting an item from Firebase directly, and watch your application update immediately!)
  //
  // <any[]> is something called a type parameter being specified by a TypeScript generic. It specifies the specific type of FirebaseListObservable this will be. We're stating that it'll be an array [] of any type of information. You're not required to know the details of this syntax for our course, but if you'd like to explore it on your own, we recommend checking out the TypeScript Documentation on Generics.

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  // Here, we call database (which is what we named our instance of AngularFireDatabase object in the constructor), then call .list to specify we're gathering a list of multiple things (remember, we're expecting a FirebaseListObservable)
  //
  // We pass in 'albums' an argument to specify which list of data we'd like. Remember, our list of Albums is situated in Firebase under albums:

  getAlbums() {
    return this.albums;
  }

  // getAlbums() is called in MarketplaceComponent. It uses our AlbumService to retrieve its data. But because getAlbums() now returns a FirebaseListObservable<any[]> object, we need to make sure the album property in MarketplaceComponent matches this data type:

  getAlbumById(albumId: number){
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }


}
