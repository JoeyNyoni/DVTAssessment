import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { fromEvent, Observable } from 'rxjs';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  @ViewChild('input', { static: true }) input: ElementRef;
  
  @Output() 
  term: EventEmitter<String> = new EventEmitter<String>();
  
  constructor() { }

  ngOnInit(): void {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter(val => val.length > 1),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((searchTerm: string) => {
      this.term.emit(searchTerm);
    });
  }

}
