import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {

 albums: FirebaseListObservable<any[]>;

   constructor(private router: Router, private albumService: AlbumService) {}

   // Just like the Router already present, this ensures all new instances of MarketplaceComponent also have an instance of AlbumService, accessible by calling this.albumService anywhere in the MarketplaceComponent class.


  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  // Here, we're redefining the component's existing albums property as the result of our new service's getAlbums() method (which returns the Albums array in our mock-albums.ts file).

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };


}
