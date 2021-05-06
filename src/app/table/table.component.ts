import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() listOpportunities: any[]; // cái này là biến
  @Output() idToDelete = new EventEmitter<any>();
  @Input() stringChanging: string;

  @Input() searchName: string;

  constructor(

  ) {

  }

  ngOnInit() {
  }

  protected deleteInternal(i) {
    if (this.listOpportunities !== null) {
      this.listOpportunities.splice(i, 1)
    }
  }
}
