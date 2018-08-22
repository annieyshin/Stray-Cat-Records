import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';

// Params will help us collect parameters for use when routing. Navigating to our Album detail page requires that we send the id of the Album we're attempting to view so we import this functionality to allow us to attach extra information to our request.

// Location helps normalize URLs when traveling between routes, especially dynamic ones. (Normalizing URLs means ensuring different paths in the application all follow the same pattern consistently).

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId: number = null;

    constructor(private route: ActivatedRoute, private location: Location) {}

    // By placing an instance of ActivatedRoute and Location in constructor(), we're ensuring that any new AlbumDetailComponent instances are created with these objects available to them.

    // By including the parameters constructor(private route: ActivatedRoute, private location: Location), any instance of AlbumDetailComponent will have route and location properties that can be accessed by calling this.route and this.location.

  ngOnInit() {
  }

}
