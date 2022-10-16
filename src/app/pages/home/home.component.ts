import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/models/Artist';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  searchResults: Observable<Artist[]>;

  constructor(private service: SearchService) { }

  ngOnInit(): void {}

  searchArtists(searchTerm: string) {
    console.log(searchTerm);
      this.service.getArtistSearchResult(searchTerm).subscribe((res: any) => {
        this.searchResults = res.data.length >= 3 ? res.data.slice(0, 3) :  res.data;
      });
  }

}
