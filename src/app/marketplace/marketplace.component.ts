import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {

  albums: Album[];

   constructor(private router: Router, private albumService: AlbumService) {}

   // Just like the Router already present, this ensures all new instances of MarketplaceComponent also have an instance of AlbumService, accessible by calling this.albumService anywhere in the MarketplaceComponent class.


  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  // Here, we're redefining the component's existing albums property as the result of our new service's getAlbums() method (which returns the Albums array in our mock-albums.ts file).

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };
  // When triggered, this method will gather the router instance provided in the constructor and call the built-in navigate() method on it, providing an array as an argument. The array contains the string 'albums' and clickedAlbum.id.
  //
  // These arguments are used to construct the URL to our route. 'albums' refers to the first portion of the route's path. clickedAlbum.id refers to the dynamic segment of the path. If clickedAlbum.id is 37, this would create a route path of albums/37.

}
