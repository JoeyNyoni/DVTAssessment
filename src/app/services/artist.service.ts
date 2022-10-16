import { Artist } from '../models/Artist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  API = environment.API_URL;

  constructor(private http: HttpClient) { }

  getArtistTopTracks(artist: Artist) {
    return this.http.get(this.API + `artist/${artist.id}/top`).pipe(map(response => {
      return response;
    }));
  }
}
