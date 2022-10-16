import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  API = environment.API_URL;

  constructor(private http: HttpClient) { }

  getArtistSearchResult(searchTerm: string) {
    this.http.get(this.API + `search/artist/`, {params: {searchTerm}}).pipe(map(response => {
      return response;
    }));
  }

}
