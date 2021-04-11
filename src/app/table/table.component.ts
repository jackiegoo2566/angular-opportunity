import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() listOpportunities: any[]; // cái này là biến
  @Input() ten: string;
  @Output() writeIdWillBeDeleted = new EventEmitter<any>();
  @Output() pushString = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  deleteItem(index): void {
    this.writeIdWillBeDeleted.emit(index);
  }

  push(abc: string) {
    this.pushString.emit(abc)
  }
}
