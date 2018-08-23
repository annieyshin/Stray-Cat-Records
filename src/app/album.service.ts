import { Injectable } from '@angular/core';
import { Album } from './album.model';
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

  addAlbum(newAlbum: Album) {
   this.albums.push(newAlbum);
  }

  // Here, the addAlbum() method refers to the this.albums defined in the service's constructor. this.albums refers to the specific area of our database where our list of Albums is stored.
  //
  // Because this.albums is a FirebaseListObservable<any[]>, as declared at the top of the file, it has many of the same properties and capabilities of any other list or array. We can simply call push() on it to add our new album to the list.

  getAlbumById(albumId: string){
  return this.database.object('albums/' + albumId);
  }

  updateAlbum(localUpdatedAlbum){
    var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
    albumEntryInFirebase.update({title: localUpdatedAlbum.title,
                                artist: localUpdatedAlbum.artist,
                                description: localUpdatedAlbum.description});
  }

  // updateAlbum() takes the local copy of the Album as an argument. Remember, this local version of Album has been edited with our two-way data binding edit form.
  //
  // It calls the existing getAlbumById() method to locate the Firebase entry corresponding to this Album. We assign this Firebase entry to the variable albumEntryInFirebase.
  //
  // getAlbumById() requires the Firebase-assigned $key as an argument. So we call localUpdatedAlbum.$key within the argument to getAlbumById().
  //
  // After the database entry has been located, we call AngularFire's built in update() method on albumEntryInFirebase.
  //
  // We update() the Album's new properties. These are formatted as key-value pairs. The key in each refers to the property in Firebase we're updating. The value of each contains the Album's local, updated properties.



}
