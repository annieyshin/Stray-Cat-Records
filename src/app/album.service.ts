import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
  return ALBUMS;
  }

  getAlbumById(albumId: number){
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

  // Now we can gather the specific Album object the user has requested to view from the service in the component's existing ngOnInit() method. However, right now our service only contains a method to return all Albums. Let's define another method that can return a specific Album:

  // Here, we've defined a getAlbumById() method that takes the id of the Album we're seeking as a parameter. It simply loops through all Albums in our ALBUMS constant, and returns the one with the id we're looking for.

}
