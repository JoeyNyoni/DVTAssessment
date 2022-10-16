import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from 'src/app/app-routing.module';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit {

  @Input() artist: Artist;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  redirectToArtistPage(artist: Artist): void {
    this.router.navigate([Navigation.ArtistView, {data: artist}]);
  }

}
