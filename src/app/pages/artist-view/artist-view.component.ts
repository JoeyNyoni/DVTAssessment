import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/Artist';
import { Track } from 'src/app/models/Track';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.sass']
})
export class ArtistViewComponent implements OnInit, AfterViewInit {
  
  artist: Artist;
  tracks: Track[];
  albums: Album[];

  constructor(private route: ActivatedRoute, private service: ArtistService) { }

  ngOnInit(): void {
    this.artist = <Artist>this.route.snapshot.queryParams;
  }

  ngAfterViewInit(): void {
    this.service.getArtistTopTracks(this.artist.id).subscribe((response: any) => {
      this.tracks = response.data;
    })

    this.service.getArtistAlbums(this.artist.id).subscribe((response: any) => {
      this.albums = response.data.length >= 4 ? response.data.slice(0, 4) : response.data;
    });
  }
}
