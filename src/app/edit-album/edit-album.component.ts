import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdatingAlbum(albumToUpdate){
    this.albumService.updateAlbum(albumToUpdate);
  }

}

// beginUpdatingAlbum() is triggered when the "Update" button registers a click event. It calls the AlbumService's updateAlbum() method, passing in the locally-updated Album.
//
// As we discussed, updateAlbum() then locates and updates the Album's Firebase entry.
