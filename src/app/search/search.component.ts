import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchNameEvent = new EventEmitter<string>();

  searchName: string;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchNameEvent.emit(this.searchName);
  }

}
