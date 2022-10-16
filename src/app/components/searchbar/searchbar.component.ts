import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { fromEvent, Observable } from 'rxjs';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit, AfterViewInit {

  @ViewChild('input', { static: true }) input: ElementRef; 
  
  searchResults: Observable<Artist[]>;
  
  constructor(private service: SearchService) { }

  ngOnInit(): void {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter(val => val.length > 1),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((searchTerm: string) => {
      this.service.getArtistSearchResult(searchTerm).subscribe((res: any) => {
        this.searchResults = res.data.length >= 3 ? res.data.slice(0, 3) :  res.data;
      })
    });
  }

  ngAfterViewInit(): void {}

}
