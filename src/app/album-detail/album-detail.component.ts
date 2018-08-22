import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

// Params will help us collect parameters for use when routing. Navigating to our Album detail page requires that we send the id of the Album we're attempting to view so we import this functionality to allow us to attach extra information to our request.

// Location helps normalize URLs when traveling between routes, especially dynamic ones. (Normalizing URLs means ensuring different paths in the application all follow the same pattern consistently).

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: number;
  albumToDisplay: Album;

    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private albumService: AlbumService
    ) {}

    // By placing an instance of ActivatedRoute and Location in constructor(), we're ensuring that any new AlbumDetailComponent instances are created with these objects available to them.

    // By including the parameters constructor(private route: ActivatedRoute, private location: Location), any instance of AlbumDetailComponent will have route and location properties that can be accessed by calling this.route and this.location.

    ngOnInit() {
     this.route.params.forEach((urlParameters) => {
       this.albumId = parseInt(urlParameters['id']);
      });
      this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
    }
    // Next, we'll add logic to the ngOnInit() method to retrieve the album AlbumDetailComponent should display from the service, using its new getAlbumById() method:.

    // This method passes our albumId property into our new getAlbumById method in our service, which returns the album we're interested in so that we can store it in the Album Details Component property albumToDisplay.

}
