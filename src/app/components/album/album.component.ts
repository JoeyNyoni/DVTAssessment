import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import * as moment from 'moment';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.sass']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;
  year: string;

  constructor() { }

  ngOnInit(): void {
    this.year = moment(this.album.release_date).format('YYYY');
  }

}
